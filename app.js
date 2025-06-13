const express = require('express');
const cors = require('cors');
const jokeRoutes = require('./routes/jokeRoutes');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger');
const db = require('./config/database');
const Joke = require('./models/joke');
const PORT = process.env.PORT || 3000;

const app = express();
app.use(cors({
origin: 'https://msuau.github.io'
}));
app.use(express.json());
app.use('/api/v1/jokes', jokeRoutes); // Versionnement API
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

db.sync()
.then(() => console.log('Base de données prête !'))
.catch(err => console.error('Erreur de BDD :', err));

app.listen(PORT, () => console.log('Serveur démarré sur le port', PORT));