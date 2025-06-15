const swaggerJSDoc = require('swagger-jsdoc');

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Blague API',
    version: '1.0.0',
    description: 'API pour récupérer et ajouter des blagues',
  },
};

const options = {
  swaggerDefinition,
  servers: {url: 'https://api-blagues-carambar.onrender.com',},
  apis: ['./routes/*.js'], // Auto-doc des routes
};

module.exports = swaggerJSDoc(options);