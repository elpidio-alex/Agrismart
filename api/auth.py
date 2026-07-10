"""
POST /api/auth?action=register  -> créer un compte (email, mot de passe,
                                    nom, prénom, téléphone, date de naissance,
                                    acceptation des conditions d'utilisation)
POST /api/auth?action=login     -> connexion (email + mot de passe)

Mots de passe hashés avec bcrypt côté serveur. Pas de session/JWT pour
l'instant : la réponse confirme juste la validité des identifiants
(à étendre plus tard avec un cookie de session si besoin).

NOTE: le bouton "Continuer avec Google" sur login.html est un
PLACEHOLDER visuel uniquement — aucun vrai flux OAuth n'est branché ici.
"""

import json
import re
import datetime
from http.server import BaseHTTPRequestHandler
from urllib.parse import urlparse, parse_qs
import sys
import os

sys.path.insert(0, os.path.join(os.path.dirname(__file__), ".."))
from lib.db import query
import bcrypt

EMAIL_RE = re.compile(r"^[^@\s]+@[^@\s]+\.[^@\s]+$")
PASSWORD_RE = re.compile(r"^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$")


class handler(BaseHTTPRequestHandler):
    def _send_json(self, status, payload):
        self.send_response(status)
        self.send_header("Content-Type", "application/json")
        self.end_headers()
        self.wfile.write(json.dumps(payload, default=str).encode())

    def do_POST(self):
        action = parse_qs(urlparse(self.path).query).get("action", [""])[0]

        length = int(self.headers.get("Content-Length", 0))
        body = self.rfile.read(length) if length else b"{}"
        try:
            payload = json.loads(body or b"{}")
        except json.JSONDecodeError:
            self._send_json(400, {"error": "Invalid JSON body"})
            return

        email = (payload.get("email") or "").strip().lower()
        password = payload.get("password") or ""

        if not EMAIL_RE.match(email):
            self._send_json(400, {"error": "Email invalide"})
            return

        if action == "register":
            self._register(email, password, payload)
        elif action == "login":
            self._login(email, password)
        else:
            self._send_json(400, {"error": "Action inconnue (register ou login attendu)"})

    def _register(self, email, password, payload):
        first_name = (payload.get("first_name") or "").strip()
        last_name = (payload.get("last_name") or "").strip()
        phone = (payload.get("phone") or "").strip()
        birth_date = (payload.get("birth_date") or "").strip()
        terms_accepted = bool(payload.get("terms_accepted"))

        if not first_name or not last_name:
            self._send_json(400, {"error": "Nom et prénom sont requis"})
            return
        if not phone:
            self._send_json(400, {"error": "Numéro de téléphone requis"})
            return
        if not birth_date:
            self._send_json(400, {"error": "Date de naissance requise"})
            return
        try:
            dob = datetime.date.fromisoformat(birth_date)
        except ValueError:
            self._send_json(400, {"error": "Date de naissance invalide"})
            return
        if not terms_accepted:
            self._send_json(400, {"error": "Vous devez accepter les conditions d'utilisation"})
            return
        if not PASSWORD_RE.match(password):
            self._send_json(400, {
                "error": "Le mot de passe doit contenir au moins 8 caractères, "
                         "une majuscule, une minuscule, un chiffre et un caractère spécial"
            })
            return

        try:
            existing = query("SELECT id FROM users WHERE email = %s", (email,))
            if existing:
                self._send_json(409, {"error": "Un compte existe déjà avec cet email"})
                return

            hashed = bcrypt.hashpw(password.encode(), bcrypt.gensalt()).decode()
            rows = query(
                "INSERT INTO users (email, password_hash, first_name, last_name, phone, birth_date, terms_accepted_at) "
                "VALUES (%s, %s, %s, %s, %s, %s, NOW()) "
                "RETURNING id, email, first_name, last_name, created_at",
                (email, hashed, first_name, last_name, phone, dob.isoformat()),
            )
            self._send_json(201, {"user": rows[0]})
        except Exception as e:
            self._send_json(500, {"error": str(e)})

    def _login(self, email, password):
        if not password:
            self._send_json(400, {"error": "Mot de passe requis"})
            return
        try:
            rows = query(
                "SELECT id, email, password_hash, first_name, last_name FROM users WHERE email = %s",
                (email,),
            )
            if not rows:
                self._send_json(401, {"error": "Email ou mot de passe incorrect"})
                return

            user = rows[0]
            if not bcrypt.checkpw(password.encode(), user["password_hash"].encode()):
                self._send_json(401, {"error": "Email ou mot de passe incorrect"})
                return

            self._send_json(200, {"user": {
                "id": user["id"],
                "email": user["email"],
                "first_name": user["first_name"],
                "last_name": user["last_name"],
            }})
        except Exception as e:
            self._send_json(500, {"error": str(e)})

