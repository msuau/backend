const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
dialect: 'sqlite', 
storage: './jokes.sqlite'
});


module.exports = sequelize;