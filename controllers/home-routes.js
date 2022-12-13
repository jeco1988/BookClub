const router = require('express').Router();
const Book = require('../models/Book');
const Review = require('../models/Review');
const Favourite = require('../models/Favourite');

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
      res.render('mustread', { 
        books,
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.get('/recentreviews', async (req, res) => {
    try {
      const reviewsData = await Review.findAll({
        include: [
          {
            model: Review,
            attributes: ['review_date'],
            order: [['review_date', 'ASC']],
          }],
      });

      const reviews = reviewsData.map((review) => review.get({ plain: true }));
      res.render('recentreviews', { 
        reviews,
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.get('/favourites', async (req, res) => {
        try {
          const favouriteData = await Favourite.findAll({
            include: [
              {
                model: Favourite,
                attributes: ['book_id'],
              }],
          });
    
          const favourites = favouriteData.map((favourite) => favourite.get({ plain: true }));
          res.render('favourites', { 
            favourites,
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