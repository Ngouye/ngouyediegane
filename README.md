# PlatMoi — Portfolio Platform

Plateforme portfolio full stack pour présenter votre parcours, vos projets et vos compétences.

**Stack :** Spring Boot 3 + React 18 + PostgreSQL + DevSecOps (Docker, K8s, Terraform, AWS)

## Structure du projet

```
platmoi/
├── backend/          # API REST Spring Boot
│   └── src/main/java/com/platmoi/
│       ├── config/       # CORS, données initiales
│       ├── controller/   # Endpoints REST
│       ├── model/        # Entités JPA
│       ├── repository/   # Repositories
│       ├── service/      # Logique métier
│       └── dto/          # Objets de transfert
└── frontend/         # Interface React
    └── src/
        ├── api/          # Appels API
        └── components/   # Composants UI
```

## Prérequis

- **Java 17+**
- **Maven 3.8+**
- **Node.js 18+** et npm
- **PostgreSQL 16+** (ou Docker)

## Base de données PostgreSQL

### Option A — Docker (recommandé)

```bash
docker compose up -d
```

Cela démarre PostgreSQL sur le port **5432** avec :
- Base : `platmoi`
- Utilisateur : `platmoi`
- Mot de passe : `platmoi`

### Option B — PostgreSQL installé localement

Créez la base manuellement :

```sql
CREATE DATABASE platmoi;
CREATE USER platmoi WITH ENCRYPTED PASSWORD 'platmoi';
GRANT ALL PRIVILEGES ON DATABASE platmoi TO platmoi;
```

### Variables d'environnement (optionnel)

Copiez `.env.example` vers `.env` pour personnaliser la connexion :

```
DB_URL=jdbc:postgresql://localhost:5432/platmoi
DB_USERNAME=platmoi
DB_PASSWORD=platmoi
```

## Lancement

### 1. PostgreSQL

```bash
docker compose up -d
```

### 2. Backend (port 8080)

```bash
cd backend
mvn spring-boot:run
```

### 3. Frontend (port 5173)

```bash
cd frontend
npm install
npm run dev
```

Ouvrez [http://localhost:5173](http://localhost:5173)

## API Endpoints

| Méthode | Endpoint              | Description                    |
|---------|-----------------------|--------------------------------|
| GET     | `/api/portfolio`      | Toutes les données portfolio   |
| GET     | `/api/profile`        | Profil personnel               |
| GET     | `/api/projects`       | Liste des projets              |
| GET     | `/api/projects/{id}`  | Détail d'un projet             |
| GET     | `/api/experiences`    | Expériences professionnelles   |
| GET     | `/api/educations`     | Formations                     |
| GET     | `/api/skills`         | Compétences                    |
| POST    | `/api/contact`        | Envoyer un message de contact  |

## Personnalisation

Modifiez vos données dans `backend/src/main/java/com/platmoi/config/DataSeeder.java` :

- Profil (nom, bio, liens sociaux)
- Projets réalisés
- Expériences professionnelles
- Formations
- Compétences et niveaux

Pour **recharger les données** si la base existe déjà :

```properties
# backend/src/main/resources/application.properties
platmoi.seed.refresh=true
```

Relancez le backend une fois, puis remettez `false`.

## Fonctionnalités

- Design moderne sombre avec animations
- Sections : Accueil, À propos, Compétences, Projets, Parcours, Contact
- Filtres par catégorie de projets
- Modal détail projet
- Timeline expérience & formation
- Formulaire de contact fonctionnel
- Responsive (mobile, tablette, desktop)
