const router = require('express').Router();
const Book = require('../models/Book');

router.get('/', async (req, res) => {
    try {
      const bookData = await Book.findAll({
        include: [
          {
            model: Book,
            attributes: ['must_read'],
          }],
      });

      const books = bookData.map((book) => book.get({ plain: true }));
      res.render('//homepage//??', { 
        books,
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.get('/login', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
      res.redirect('/myFavourites');
      return;
    }
  
    res.render('login');
  });

  module.exports = router;