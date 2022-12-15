const router = require('express').Router();
const Book = require('../models/Book');
const Review = require('../models/Review');
const Favourite = require('../models/Favourite');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try {
      const bookData = await Book.findAll({
        where: {must_read: true}
      });

      const books = bookData.map((book) => book.get({ plain: true }));
      res.render('mustread', { 
        books,
        // logged_in: req.session.logged_in 
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

  router.get('/recentreviews', async (req, res) => {
    try {
      const reviewsData = await Review.findAll({
       order: [['review_date', 'ASC']],
      });

      const reviews = reviewsData.map((review) => review.get({ plain: true }));
      res.render('recentreviews', { 
        reviews,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

  router.get('/favourites', withAuth, async (req, res) => {
        try {
          const favouriteData = await Favourite.findAll({
            include: [
              {
                model: Book
              }],
          });
    
          const favourites = favouriteData.map((favourite) => favourite.get({ plain: true }));
          res.render('favourites', { 
            favourites,
            logged_in: true
          });
        } catch (err) {
          res.status(500).json(err);
        }
      });

  router.get('/login', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    // if (req.session.logged_in) {
    //   res.redirect('/favourites');
    //   return;
    // }
  
    res.render('login');
  });

  router.get('/signup', (req, res) => {

  
    res.render('signup');
  });

  module.exports = router;