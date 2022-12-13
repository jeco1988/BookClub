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
      book_id: 14,
      review: 'I did not like this book.',
      review_date: new Date()
    },
    {
      user_id: 1,
      book_id: 12,
      review: 'This book was alright',
      review_date: new Date()
    },
    {
      user_id: 3,
      book_id: 15,
      review: 'This book was OK.',
      review_date: new Date()
    },
    {
      user_id: 3,
      book_id: 8,
      review: 'I enjoyed this book a lot.',
      review_date: new Date()
    },
    {
      user_id: 8,
      book_id: 4,
      review: 'This book surprised me',
      review_date: new Date()
    },
    {
      user_id: 7,
      book_id: 2,
      review: 'I really enjoyed this book.',
      review_date: new Date()
    },
    {
      user_id: 9,
      book_id: 12,
      review: 'I had a great time reading this book.',
      review_date: new Date()
    },
    {
      user_id: 14,
      book_id: 9,
      review: 'I couldnt put this book down',
      review_date: new Date()
    },
    {
      user_id: 13,
      book_id: 8,
      review: 'This book is a must read.',
      review_date: new Date()
    },
    {
      user_id: 12,
      book_id: 6,
      review: 'One of my favourite reads.',
      review_date: new Date()
    },
    {
      user_id: 10,
      book_id: 11,
      review: 'Oh my this book was wonderful',
      review_date: new Date()
    },
    {
      user_id: 4,
      book_id: 12,
      review: 'Did not live up to my expectations.',
      review_date: new Date()
    },
    {
      user_id: 12,
      book_id: 13,
      review: 'I did not like this book.',
      review_date: new Date()
    }
  ];

  const seedReview = () => Review.bulkCreate(reviews);

  module.exports = seedReview;

  