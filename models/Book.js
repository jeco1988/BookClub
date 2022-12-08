const { Model, DataTypes, BOOLEAN } = require('sequelize');
const sequelize = require('../config/connection');

// create our Book model
class Book extends Model {}

// create fields/columns for Book model
Book.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    author: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    year_published: {
      type: DataTypes.INTEGER(4),
      allowNull: false
    },
    must_read: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'book'
  }
);

module.exports = Book;