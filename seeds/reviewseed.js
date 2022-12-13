const { Review } = require('../models');

const reviews = [
    {
      user_id: 1,
      book_id: 1,
      review: 'This is a great book!',
      review_date: new Date()
    },
    {
      user_id: 1,
      book_id: 2,
      review: 'I enjoyed this book a lot.',
      review_date: new Date()
    },
    {
      user_id: 2,
      book_id: 3,
      review: 'I did not like this book.',
      review_date: new Date()
    }
  ];

  const seedReview = () => Review.bulkCreate(reviews);

  module.exports = seedReview;

  