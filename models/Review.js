const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our Review model
class Review extends Model {}

// create fields/columns for Review model
Review.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
        unique: false
      }
    },
    book_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'book',
        key: 'id',
        unique: false
      }
    },
    review: {
      type: DataTypes.TEXT,
    },
    review_date: {
      type: DataTypes.DATE
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'review'
  }
);

module.exports = Review;