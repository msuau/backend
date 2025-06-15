# API Blagues Carambar

Une API REST développée en Node.js permettant de gérer une collection de blagues Carambar. Cette API permet d'ajouter, consulter et obtenir une blague aléatoire.

## ✨ Fonctionnalités

* Versionnage de l’API (`/api/v1`)
* Création et consultation de blagues
* Endpoint pour une blague aléatoire
* Documentation Swagger
* Base de données SQLite (via Sequelize)
* Déploiement sur Render
* CORS configuré pour autoriser le frontend GitHub Pages

## 🚀 Technologies utilisées

* Node.js
* Express
* Sequelize
* SQLite
* Swagger (swagger-ui-express)
* CORS
* Render (hébergement)

## 📚 Endpoints disponibles

| Méthode | Route                | Description                    |
| ------: | -------------------- | ------------------------------ |
|    POST | /api/v1/jokes        | Ajouter une blague             |
|     GET | /api/v1/jokes        | Récupérer toutes les blagues   |
|     GET | /api/v1/jokes/\:id   | Récupérer une blague par ID    |
|     GET | /api/v1/jokes/random | Récupérer une blague aléatoire |
|     GET | /api-docs            | Documentation Swagger          |

## 🔧 Lancer en local

1. Cloner le repo :

```bash
git clone https://github.com/msuau/backend.git
cd backend
```

2. Installer les dépendances :

```bash
npm install
```

3. Lancer le serveur :

```bash
npm start
```

L'API sera disponible sur [http://localhost:3000](http://localhost:3000)

## 🌐 Déploiement

L’API est déployée sur Render :

→ [https://api-blagues-carambar.onrender.com](https://api-blagues-carambar.onrender.com)

La documentation Swagger est disponible ici :

→ [https://api-blagues-carambar.onrender.com/api-docs](https://api-blagues-carambar.onrender.com/api-docs)

## 🔗 Dépendance front-end

Le frontend appelle l’endpoint suivant :

→ [https://api-blagues-carambar.onrender.com/api/v1/jokes/random](https://api-blagues-carambar.onrender.com/api/v1/jokes/random)

## 🧑‍💻 Auteur

Projet réalisé par Mathias SUAU, dans le cadre de la sélection à la formation CDA.

---