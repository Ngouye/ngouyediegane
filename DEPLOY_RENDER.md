# Déploiement complet sur Render (Postgres + Backend Java + Frontend)

Ce guide explique comment déployer l'ensemble du projet `platmoi` sur Render. Il suppose que ton code est dans un repo Git (GitHub recommandé).

Résumé des services à créer sur Render:
- Managed Postgres (Add a Database)
- Web Service (Backend) — image Docker built from `backend/Dockerfile`
- Static Site (Frontend) — build `frontend` avec `npm run build`

1) Préparer le dépôt

- Pousse tout le projet sur GitHub (branche `main`/`master`).

2) Créer la base de données Postgres sur Render

- Dans Render Dashboard → New → Database → PostgreSQL
- Choisis un nom (ex: `platmoi-db`) et le plan gratuit/Starter.
- Après création, récupère les variables de connexion (host, port, database, user, password).

3) Créer le Web Service pour le backend (Docker)

- Dans Render Dashboard → New → Web Service
- Connecte ton repo Git et choisis la branche (`main`).
- Choisis `Docker` (Render utilisera ton `backend/Dockerfile`).
- Build command: (peut rester vide si Dockerfile gère la compilation). Si Render demande, laisse vide.
- Start command: `java -jar target/*.jar` (si tu utilises Maven build sur Render) — mais avec Dockerfile multi-stage, l'image contient déjà le jar, Render lancera le container sans commande supplémentaire.

Variables d'environnement à ajouter au Web Service (Environment → Environment Variables):
- `DB_URL` = `jdbc:postgresql://<HOST>:<PORT>/<DATABASE>`
- `DB_USERNAME` = `<user>`
- `DB_PASSWORD` = `<password>`
- `app.allowed-origins` = `https://<ton-frontend>.onrender.com` (ou l'URL que Render donnera au site statique)
- `PORT` = Laisser vide ou `8080` (Render fournit souvent automatiquement un port, mais `application.properties` utilise `${PORT:8080}`).

Note: si Render fournit une `DATABASE_URL` complète, tu peux construire `DB_URL` à partir des éléments ou configurer Render pour exposer `DB_HOST`, `DB_PORT`, `DB_NAME`, `DB_USER`, `DB_PASSWORD`.

4) Créer le Static Site pour le frontend

- Dans Render Dashboard → New → Static Site
- Connecte ton repo Git et choisis la branche (`main`).
- Root directory: `frontend`
- Build command: `npm install && npm run build`
- Publish directory: `dist` (Vite place le build dans `frontend/dist`)
- Environment variables (Environment → Environment Variables):
  - `VITE_API_BASE` = `https://<ton-backend>.onrender.com/api` (remplace par l'URL fournie par ton Web Service)

5) Déployer et vérifier

- Déploie la DB, puis le backend, puis le frontend (l'ordre permet au backend d'accéder à la DB au moment du démarrage).
- Vérifie les logs Render pour le backend (build + runtime). Si erreurs de migration/connexion, vérifie `DB_URL` et credentiels.
- Ouvre `https://<backend>.onrender.com/api/portfolio` pour vérifier que l'API répond.
- Ouvre l'URL du Static Site (ex: `https://<ton-frontend>.onrender.com`) et teste la navigation.

6) Règles CORS

- Mets `app.allowed-origins` dans les env vars du backend avec l'URL exacte du frontend.
- Exemple: `app.allowed-origins=https://platmoi-frontend.onrender.com`

7) Optionnel — CI automatique

- Render déclenche automatiquement des déploiements à chaque push sur la branche connectée. Tu peux aussi ajouter des workflows GitHub Actions pour tests avant push.

8) Commandes utiles locales

Lancer Postgres local via docker-compose (déjà fourni dans le repo) :

```bash
docker compose up -d
```

Builder et lancer le backend localement :

```bash
cd backend
mvn -B package -DskipTests
java -jar target/*.jar
```

Builder et prévisualiser le frontend :

```bash
cd frontend
npm install
npm run build
npm run preview
```

9) Variables d'environnement récapitulatives (à définir sur Render)

- Web Service (backend): `DB_URL`, `DB_USERNAME`, `DB_PASSWORD`, `app.allowed-origins`, `PORT` (optionnel)
- Static Site (frontend): `VITE_API_BASE` = `https://<backend>/api`

Si tu veux, je peux :
- créer automatiquement un `render.yaml` pour provisionner les services (préliminaire),
- ajouter un fichier `Dockerfile` (déjà ajouté pour le backend),
- créer un workflow GitHub Actions pour tests et push.

Fin du guide
