"""GET/POST /api/forum — liste et ajout de messages du forum, via Postgres/Neon."""

import json
import sys
import os
from http.server import BaseHTTPRequestHandler

sys.path.insert(0, os.path.join(os.path.dirname(__file__), ".."))
from lib.db import query


class handler(BaseHTTPRequestHandler):
    def _send_json(self, status, payload):
        self.send_response(status)
        self.send_header("Content-Type", "application/json")
        self.end_headers()
        self.wfile.write(json.dumps(payload, default=str).encode())

    def do_GET(self):
        try:
            rows = query(
                "SELECT id, name, message, created_at AS timestamp "
                "FROM forum_posts ORDER BY id DESC"
            )
            self._send_json(200, rows)
        except Exception as e:
            self._send_json(500, {"error": str(e)})

    def do_POST(self):
        try:
            length = int(self.headers.get("Content-Length", 0))
            body = self.rfile.read(length) if length else b"{}"
            payload = json.loads(body or b"{}")

            name = (payload.get("name") or "").strip()
            message = (payload.get("message") or "").strip()

            if not name or not message:
                self._send_json(400, {"error": "Both name and message are required"})
                return
            if len(name) > 80 or len(message) > 2000:
                self._send_json(400, {"error": "Name or message too long"})
                return

            rows = query(
                "INSERT INTO forum_posts (name, message) VALUES (%s, %s) "
                "RETURNING id, name, message, created_at AS timestamp",
                (name, message),
            )
            self._send_json(201, rows[0])
        except Exception as e:
            self._send_json(500, {"error": str(e)})
