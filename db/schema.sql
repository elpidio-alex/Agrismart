-- Schéma AgriSmart — Postgres / Neon
-- À exécuter une fois depuis le dashboard Vercel (Storage > Postgres > Query)
-- ou via `psql $DATABASE_URL -f db/schema.sql`

CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash TEXT NOT NULL,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    phone VARCHAR(30) NOT NULL,
    birth_date DATE NOT NULL,
    terms_accepted_at TIMESTAMP NOT NULL DEFAULT NOW(),
    created_at TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS forum_posts (
    id SERIAL PRIMARY KEY,
    name VARCHAR(80) NOT NULL,
    message VARCHAR(2000) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS prices (
    id SERIAL PRIMARY KEY,
    crop VARCHAR(50) NOT NULL,
    label VARCHAR(100) NOT NULL,
    min_price INTEGER NOT NULL,
    max_price INTEGER NOT NULL,
    unit VARCHAR(30) NOT NULL DEFAULT 'FCFA/kg'
);

-- Données de départ (identiques à l'ancien DEFAULT_FORUM_POSTS / DEFAULT_PRICES)
INSERT INTO forum_posts (name, message, created_at) VALUES
    ('Amis Farmer', 'Which crop is best for the rainy season in Togo?', '2026-01-01T00:00:00'),
    ('AgriExpert', 'Maize and cassava are very productive in this period.', '2026-01-01T00:05:00')
ON CONFLICT DO NOTHING;

INSERT INTO prices (crop, label, min_price, max_price, unit) VALUES
    ('maize', '🌽 Maize', 250, 300, 'FCFA/kg'),
    ('rice', '🌾 Rice', 400, 600, 'FCFA/kg'),
    ('cassava', '🥔 Cassava', 150, 200, 'FCFA/kg'),
    ('groundnut', '🥜 Groundnut', 500, 800, 'FCFA/kg')
ON CONFLICT DO NOTHING;
