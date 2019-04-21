const Sequelize = require('sequelize');
const sequelize = require('../db/config');

const Model = Sequelize.Model;

class File extends Model {}
File.init({
  id: {
    type: Sequelize.UUID,
    primaryKey: true,
  },
  secure_url: {
    type: Sequelize.STRING,
    allowNull: false
  },
}, {
  sequelize,
  modelName: 'file'
  // options
});

module.exports = File;