const { Favourite } = require('../models');

const favourites = [
    {
      user_id: 1,
      book_id: 1
    },
    {
      user_id: 1,
      book_id: 2
    },
    {
      user_id: 2,
      book_id: 3
    },
    {
      user_id: 8,
      book_id: 10
    },
    {
      user_id: 11,
      book_id: 2
    },
    {
      user_id: 14,
      book_id: 3
    },
    {
      user_id: 12,
      book_id: 8
    },
    {
      user_id: 15,
      book_id: 8
    },
    {
      user_id: 6,
      book_id: 13
    },
    {
      user_id: 4,
      book_id: 1
    },
    {
      user_id: 8,
      book_id: 2
    },
    {
      user_id: 10,
      book_id: 3
    },
    {
      user_id: 9,
      book_id: 5
    },
    {
      user_id: 9,
      book_id: 2
    },
    {
      user_id: 10,
      book_id: 5
    },
  ];
  
  const seedFavourite = () => Favourite.bulkCreate(favourites);

  module.exports = seedFavourite;
  