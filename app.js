const express = require('express');
const db = require('./config/database');
const Joke = require('./models/joke');

const app = express();
app.use(express.json());

db.sync()
.then(() => console.log('Base de données prête !'))
.catch(err => console.error('Erreur de BDD :', err));