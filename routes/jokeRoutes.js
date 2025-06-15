const express = require('express');
const router = express.Router();
const jokeController = require('../controllers/jokeController');

/**
 * @swagger
 * tags:
 * name: Blagues
 * description: API pour gérer les blagues
 */

/**
 * @swagger
 * /api/v1/jokes/random:
 *   get:
 *     summary: Obtenir une blague aléatoire
 *     tags: [Blagues]
 *     responses:
 *       200:
 *         description: Blague aléatoire récupérée avec succès
 */
router.get('/random', jokeController.getRandomJoke);   // GET /api/v1/jokes/random

/**
 * @swagger
 * /api/v1/jokes:
 *   post:
 *     summary: Ajouter une nouvelle blague
 *     tags: [Blagues]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               content:
 *                 type: string
 *                 description: Le contenu de la blague
 *               answer:
 *                 type: string
 *                 description: La réponse à la blague
 *     responses:
 *       201:
 *         description: Blague ajoutée avec succès
 */
router.post('/', jokeController.addJoke);              // POST /api/v1/jokes/

/**
 * @swagger
 * /api/v1/jokes:
 *   get:
 *     summary: Obtenir toutes les blagues
 *     tags: [Blagues]
 *     responses:
 *       200:
 *         description: Liste de toutes les blagues récupérée avec succès
 */
router.get('/', jokeController.getAllJokes);           // GET /api/v1/jokes/

/**
 * @swagger
 * /api/v1/jokes/{id}:
 *   get:
 *     summary: Obtenir une blague par ID
 *     tags: [Blagues]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: L'ID de la blague à récupérer
 *     responses:
 *       200:
 *         description: Blague récupérée avec succès
 */
router.get('/:id', jokeController.getJokeById);        // GET /api/v1/jokes/:id
  

module.exports = router;