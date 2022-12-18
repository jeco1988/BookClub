const router = require('express').Router();
const Book = require('../models/Book');
const Review = require('../models/Review');
const Favourite = require('../models/Favourite');
const withAuth = require('../utils/auth');
const { User } = require('../models');

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
       include: [
        {
          model: User,
          attributes: ['user_name'],
        },
        {
          model: Book,
          attributes: ['title'],
        },
       ],
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

  router.get('/favourites/:id', withAuth, async (req, res) => {
        try {
          const favouriteData = await User.findOne({
            where: {id: req.params.id},
            include: [
              {
                model: Book,
                through: Favourite
              }],
          });
    
          const favourites = favouriteData.get({ plain: true });
          res.render('favourites', { 
            favourites,
            // logged_in: true
          });
        } catch (err) {
          res.status(500).json(err);
        }
      });

    router.get('/login', (req, res) => {
        if (req.session.logged_in) {
          res.redirect('/');
          return;
     } res.render('login')
    });

  router.get('/signup', (req, res) => {

  
    res.render('signup');
  });

  router.get('/logout', (req,res) => {
    res.render('login')
  })

  module.exports = router;