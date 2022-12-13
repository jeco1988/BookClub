const router = require('express').Router();
const Book = require('../models/Book');
// withauth require??

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
     // logged_in: req.session.logged_in 
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

  module.exports = router;