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
try {
const count = await Joke.count();
if (count === 0) {
return res.status(404).json({ message: 'Aucune blague disponible' });
}

const randomIndex = Math.floor(Math.random() * count);

const jokes = await Joke.findAll({
  limit: 1,
  offset: randomIndex
});

const joke = jokes[0];

if (!joke) {
  return res.status(404).json({ message: 'Blague introuvable' });
}

res.json(joke);
} catch (err) {
console.error(err);
res.status(500).json({ message: 'Erreur serveur' });
}
};