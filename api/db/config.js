const Sequelize = require('sequelize');
const sequelize = new Sequelize({
  database: 'samacare_db',
  dialect: 'postgres',
  host: 'localhost',
});


module.exports = sequelize;