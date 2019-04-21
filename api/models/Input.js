const Sequelize = require('sequelize');
const sequelize = require('../db/config');
const Model = Sequelize.Model;

class Inputs extends Model {}
Inputs.init({
  // attributes
  x: {
    type: Sequelize.FLOAT
  },
  y: {
    type: Sequelize.FLOAT
  }
}, {
  sequelize,
  modelName: 'input'
  // options
});

module.exports = Inputs;