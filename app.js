const express = require('express');
const jokeRoutes = require('./routes/jokeRoutes');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger');
const db = require('./config/database');
const Joke = require('./models/joke');

const app = express();
app.use(express.json());
app.use('/api/v1/jokes', jokeRoutes); // Versionnement API
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

db.sync()
.then(() => console.log('Base de données prête !'))
.catch(err => console.error('Erreur de BDD :', err));

app.listen(3000, () => console.log('Serveur démarré sur le port 3000'));