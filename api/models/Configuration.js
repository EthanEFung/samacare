const Sequelize = require('sequelize');
const sequelize = require('../db/config');

const Model = Sequelize.Model;

class Configuration extends Model {}
Configuration.init({
  id: {
    type: Sequelize.UUID,
    primaryKey: true,
  },
  secure_url: {
    type: Sequelize.STRING,
    allowNull: false
  },
  configurations: {
    type: Sequelize.STRING
    // allowNull defaults to true
  }
}, {
  sequelize,
  modelName: 'configuration'
  // options
});


module.exports = Configuration;