# AgriSmart

## Frontend
Ouvrez simplement `index.html` dans un navigateur (ou servez le dossier avec
n'importe quel serveur statique). Le frontend fonctionne seul, avec des
données par défaut, même sans backend.

## Backend (optionnel mais recommandé)
Le backend Flask fournit :
- `POST /predict` — analyse d'image de feuille (heuristique couleur, PAS un modèle ML entraîné)
- `GET /api/prices` — prix du marché
- `GET/POST /api/forum` — publications du forum, persistées dans `backend/data/`

### Lancer le backend

```bash
cd backend
python3 -m venv venv
source venv/bin/activate   # Windows: venv\Scripts\activate
pip install -r requirements.txt
python app.py
```

Le serveur démarre sur `http://localhost:5000`. Le frontend le détecte
automatiquement (voir `API_BASE` dans `assets/js/script.js`) ; s'il n'est pas
lancé, chaque fonctionnalité retombe silencieusement sur les données locales
déjà présentes dans la page.

### Important
L'analyse de maladie est une **heuristique de couleur simple** (ratio de vert
vs brun/jaune sur l'image), pas un vrai modèle de machine learning. Elle sert
de point de départ fonctionnel — pour un usage agronomique réel, il faudra la
remplacer par un modèle entraîné (ex. CNN sur le dataset PlantVillage).

## Images
Le dossier `assets/images/` est vide. Ajoutez-y vos photos avec les noms
listés dans `assets/images/README.txt` pour que le slider de la page
d'accueil s'affiche correctement.
