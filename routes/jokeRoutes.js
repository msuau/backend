const express = require('express');
const router = express.Router();
const jokeController = require('../controllers/jokeController');

router.get('/random', jokeController.getRandomJoke);   // GET /api/v1/jokes/random
router.post('/', jokeController.addJoke);              // POST /api/v1/jokes/
router.get('/', jokeController.getAllJokes);           // GET /api/v1/jokes/
router.get('/:id', jokeController.getJokeById);        // GET /api/v1/jokes/:id
  

module.exports = router;