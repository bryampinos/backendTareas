const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Tarea = sequelize.define('Tarea', {
  idTarea: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  tituloTarea: {
    type: DataTypes.STRING(45),
    allowNull: true
  },
  estadoTarea: {
    type: DataTypes.STRING(45),
    allowNull: true
  }
}, {
  tableName: 'tarea',
  timestamps: false 
});

module.exports = Tarea;