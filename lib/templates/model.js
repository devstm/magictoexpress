const { DataTypes } = require('sequelize');
const sequelize = require('../database/config/connection');

const {{model}} = sequelize.define('{{model}}', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: '{{tableName}}',
  timestamps: true,
});

module.exports = {{model}};
