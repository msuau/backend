const Joke = require('../models/joke');

// Ajouter une blague
exports.addJoke = async (req, res) => {
  const { content, answer } = req.body;
  const newJoke = await Joke.create({ content, answer });
  res.json(newJoke);
};

// Voir toutes les blagues
exports.getAllJokes = async (req, res) => {
  const jokes = await Joke.findAll();
  res.json(jokes);
};

// Voir une blague par ID
exports.getJokeById = async (req, res) => {
  const joke = await Joke.findByPk(req.params.id);
  res.json(joke);
};

// Voir une blague aléatoire
exports.getRandomJoke = async (req, res) => {
  const count = await Joke.count();
  const randomIndex = Math.floor(Math.random() * count);
  const joke = await Joke.findOne({ offset: randomIndex });
  res.json(joke);
};