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
      must_read: false
    },
    {
      title: 'Pride and Prejudice',
      author: 'Jane Austen',
      year_published: 1813,
      must_read: false
    },
    {
      title: 'Moby-Dick',
      author: 'Herman Melville',
      year_published: 1851,
      must_read: false
    },
    {
      title: 'The Picture of Dorian Gray',
      author: 'Oscar Wilde',
      year_published: 1890,
      must_read: false
    },
    {
      title: 'Frankenstein',
      author: 'Mary Shelley',
      year_published: 1818,
      must_read: false
    },
    {
      title: 'Rebecca',
      author: 'Daphne du Maurier',
      year_published: 1938,
      must_read: false
    },
    {
      title: 'The Catcher in the Rye',
      author: 'J.D. Salinger',
      year_published: 1951,
      must_read: false
    },
    {
      title: 'I Capture the Castle',
      author: 'Dodie Smith',
      year_published: 1948,
      must_read: false
    },
    {
      title: 'Of Mice and Men',
      author: 'John Steinbeck',
      year_published: 1937,
      must_read: false
    },
    {
      title: 'Animal Farm',
      author: 'George Orwell',
      year_published: 1945,
      must_read: false
    },
    {
      title: `The Count of Monte Cristo`,
      author: 'Alexandra Dumas',
      year_published: 1846,
      must_read: false
    },
    {
      title: `War and Peace`,
      author: 'Leo Tolstoy',
      year_published: 1869,
      must_read: false
    },
    {
      title: `The Adventures of Sherlock Holmes`,
      author: 'Arthur Conan Doyle',
      year_published: 1892,
      must_read: false
    },
    {
      title: `Jane Eyre`,
      author: 'Charlotte Bronte',
      year_published: 1847,
      must_read: false
    }
  ];
  
const seedBook = () => Book.bulkCreate(books);

module.exports = seedBook;
  