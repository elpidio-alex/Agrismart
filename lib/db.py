"""
Connexion partagée à la base Postgres (Neon, natif Vercel).

Utilise la variable d'environnement DATABASE_URL fournie automatiquement
par l'intégration Vercel Postgres/Neon (Storage > Postgres > Connect).
"""

import os
import psycopg2
import psycopg2.extras


def get_connection():
    database_url = os.environ.get("DATABASE_URL")
    if not database_url:
        raise RuntimeError(
            "DATABASE_URL n'est pas définie. "
            "Ajoutez une base Postgres/Neon depuis le dashboard Vercel (Storage)."
        )
    return psycopg2.connect(database_url, sslmode="require")


def query(sql, params=None, fetch=True, dict_cursor=True):
    """Exécute une requête SQL et retourne les lignes (si fetch=True)."""
    conn = get_connection()
    try:
        cursor_factory = psycopg2.extras.RealDictCursor if dict_cursor else None
        with conn.cursor(cursor_factory=cursor_factory) as cur:
            cur.execute(sql, params or ())
            if fetch:
                rows = cur.fetchall()
            else:
                rows = None
            conn.commit()
            return rows
    finally:
        conn.close()
