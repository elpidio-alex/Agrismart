
"""
Date : 08/07/2026
Auteur : Elpidio Alexis AMOUSSOU
Email : amoussouelpidioalexis@gmail.com

"""

# 🌾 AgriSmart

**Plateforme numérique intelligente pour l'agriculture au Togo**

AgriSmart aide les agriculteurs togolais à prendre de meilleures décisions grâce à la technologie : prévisions météo, guide des cultures, prix du marché en temps réel, détection de maladies des plantes, calculateur de ferme et communauté d'entraide.

![Statut](https://img.shields.io/badge/statut-en%20développement-orange)
![Licence](https://img.shields.io/badge/licence-privé-lightgrey)

---

## 📋 Table des matières

- [Aperçu](#-aperçu)
- [Fonctionnalités](#-fonctionnalités)
- [Stack technique](#-stack-technique)
- [Structure du projet](#-structure-du-projet)
- [Installation locale](#-installation-locale)
- [Déploiement](#-déploiement)
- [Base de données](#-base-de-données)
- [API — Endpoints](#-api--endpoints)
- [Authentification](#-authentification)
- [Internationalisation](#-internationalisation)
- [Feuille de route](#-feuille-de-route)
- [Notes importantes](#-notes-importantes)

---

## 🎯 Aperçu

AgriSmart est une Progressive Web App conçue pour digitaliser l'agriculture au Togo, avec une charte visuelle vert forêt / or (police Cambria), pensée pour être accessible même aux utilisateurs peu familiers avec la technologie.

**Public cible** : petits exploitants agricoles au Togo et, à terme, en Afrique de l'Ouest.

## ✨ Fonctionnalités

| Module | Description |
|---|---|
| 🌦️ **Prévisions météo** | Prévisions sur 3 jours avec conseils agricoles associés |
| 🌾 **Guide des cultures** | Recherche de cultures (maïs, riz, manioc...) avec conseils de saison |
| 💰 **Prix du marché** | Prix en temps réel des principales cultures (FCFA/kg) |
| 🦠 **Détection de maladies** | Analyse d'image de feuille (heuristique couleur) |
| 🧮 **Calculateur de ferme** | Outils de calcul pour la gestion d'exploitation |
| 👥 **Communauté (Forum)** | Espace d'échange entre agriculteurs |
| 🔐 **Connexion / Inscription** | Comptes utilisateurs avec mot de passe sécurisé |
| 🌍 **Multilingue** | Français / Anglais (bascule dynamique, drapeaux SVG) |

## 🛠️ Stack technique

**Frontend**
- HTML5 / CSS3 (design system personnalisé, vert forêt/or, Cambria)
- JavaScript vanilla (pas de framework)
- Progressive Web App

**Backend**
- Fonctions serverless Python (`@vercel/python`)
- PostgreSQL (Neon, natif Vercel)
- `bcrypt` pour le hashage des mots de passe
- `Pillow` pour l'analyse d'image (détection de maladies)

**Hébergement**
- [Vercel](https://vercel.com) (frontend statique + fonctions serverless + base Postgres)

## 📁 Structure du projet
agrismart-frontend/
├── index.html              # Page d'accueil
├── login.html               # Connexion / Inscription
├── weather.html              # Prévisions météo
├── crop.html                 # Guide des cultures
├── prices.html                # Prix du marché
├── disease.html                # Détection de maladies
├── calculator.html              # Calculateur de ferme
├── forum.html                    # Communauté
├── about.html                     # À propos
├── contact.html                    # Contact
│
├── api/                     # Fonctions serverless (backend)
│   ├── auth.py               # Inscription / connexion
│   ├── predict.py             # Détection de maladies (image)
│   ├── prices.py                # Prix du marché
│   └── forum.py                  # Messages du forum
│
├── lib/
│   └── db.py                 # Connexion partagée à Postgres
│
├── db/
│   ├── schema.sql             # Création des tables + données de départ
│   └── migration_users_v2.sql  # Migration si base déjà existante
│
├── assets/
│   ├── css/style.css          # Design system
│   ├── js/script.js            # Logique frontend (langue, formulaires, API)
│   └── images/                  # Logo, favicon, photos du hero
│
├── vercel.json               # Configuration du routing Vercel
├── requirements.txt            # Dépendances Python
└── DEPLOY.md                    # Guide de déploiement détaillé

## 💻 Installation locale

### Prérequis
- [Node.js](https://nodejs.org) (pour la CLI Vercel)
- Python 3.9+
- Un compte [Vercel](https://vercel.com)

### Étapes

```bash
# 1. Cloner / extraire le projet
cd agrismart-frontend

# 2. Installer les dépendances Python
pip install -r requirements.txt --break-system-packages

# 3. Installer la CLI Vercel
npm install -g vercel

# 4. Lancer en local
vercel dev
```

## 🚀 Déploiement

Voir le fichier [`DEPLOY.md`](./DEPLOY.md) pour les instructions complètes. En résumé :

```bash
vercel          # déploiement de test
vercel --prod   # déploiement en production
```

Vercel détecte automatiquement `requirements.txt` et construit les fonctions listées dans `vercel.json`.

## 🗄️ Base de données

Le projet utilise **Postgres via Neon**, intégré nativement à Vercel.

### Mise en place

1. Dashboard Vercel → **Storage** → **Create Database** → **Postgres (Neon)**
2. Connecter la base au projet (Vercel ajoute automatiquement la variable `DATABASE_URL`)
3. Initialiser les tables :

```bash
psql "$DATABASE_URL" -f db/schema.sql
```

> Si une base existait déjà avec l'ancien schéma (avant l'ajout des champs prénom/nom/téléphone/date de naissance), exécuter aussi `db/migration_users_v2.sql`.

### Tables

| Table | Description |
|---|---|
| `users` | Comptes utilisateurs (email, mot de passe hashé, prénom, nom, téléphone, date de naissance, acceptation CGU) |
| `forum_posts` | Messages du forum communautaire |
| `prices` | Prix du marché par culture |

## 🔌 API — Endpoints

| Route | Méthode | Description |
|---|---|---|
| `/predict` | `POST` | Détection de maladie sur image de feuille |
| `/api/prices` | `GET` | Liste des prix du marché |
| `/api/forum` | `GET` | Liste des messages du forum |
| `/api/forum` | `POST` | Publier un message |
| `/api/auth?action=register` | `POST` | Créer un compte |
| `/api/auth?action=login` | `POST` | Se connecter |

Le frontend appelle ces routes en chemin relatif (`API_BASE = ""`) — tout fonctionne sur le même domaine, sans configuration CORS.

## 🔐 Authentification

- Mots de passe hashés avec **bcrypt** avant stockage
- Règles de mot de passe imposées : **8 caractères minimum, 1 majuscule, 1 minuscule, 1 chiffre, 1 caractère spécial** (validation en direct côté client + côté serveur)
- Confirmation du mot de passe obligatoire à l'inscription
- Acceptation des conditions d'utilisation obligatoire (case à cocher)
- Formulaires de connexion et d'inscription **entièrement séparés** (pas de simple bascule d'onglet visuel)

> ⚠️ **Le bouton "Continuer avec Google" est un placeholder visuel uniquement.** Aucun flux OAuth réel n'est branché. Pour l'activer : créer un projet [Google Cloud Console](https://console.cloud.google.com), obtenir un `client_id`/`client_secret`, puis étendre `api/auth.py`.

## 🌍 Internationalisation

- Français / Anglais, bascule dynamique via un bouton drapeau (SVG inline, pas d'emoji — rendu garanti sur toutes les plateformes)
- Préférence de langue sauvegardée dans `localStorage`
- Toute la navigation, les titres et les contenus principaux sont traduits

## 🗺️ Feuille de route

- [ ] Déploiement en production sur Vercel
- [ ] Connexion OAuth Google réelle
- [ ] Sessions utilisateur persistantes (cookie / JWT)
- [ ] Modèle de détection de maladies basé sur un vrai CNN (actuellement heuristique couleur)
- [ ] Ajout de la traduction Éwé (prévue dans la vision initiale du projet)
- [ ] Marketplace B2B et logistique de fret agricole

## ⚠️ Notes importantes

- **Détection de maladies** : l'algorithme actuel est une heuristique basée sur le ratio de couleurs de l'image (vert vs brun/jaune), **pas un modèle de machine learning entraîné**. À remplacer avant tout usage agronomique réel.
- **Photos du hero** (page d'accueil) : à ajouter manuellement dans `assets/images/` (`hero-1.jpg` à `hero-6.jpg`) — voir le `README.txt` dans ce dossier pour des sources libres de droit.
- Toutes les fonctions serverless sont en Python et utilisent `psycopg2-binary` pour la connexion à Postgres.

---

**Développé pour Togo Code Run 2026** — en partenariat avec KAILEND (NGO, Région des Plateaux, Togo).

---

## Auteur

**Elpidio Alexis AMOUSSOU**  
**amoussouelpidioalexis@gmail.com**
L1 Cybersécurité — iPNet Institute of Technology, Lomé, Togo  
[github.com/elpidio-alex](https://github.com/elpidio-alex)