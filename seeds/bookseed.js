const { Book } = require('../models');

const books = [
    {
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      year_published: 1925,
      must_read: true
    },
    {
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      year_published: 1960,
      must_read: true
    },
    {
      title: 'Pride and Prejudice',
      author: 'Jane Austen',
      year_published: 1813,
      must_read: false
    }
  ];
  
const seedBook = () => Book.bulkCreate(books);

module.exports = seedBook;
  