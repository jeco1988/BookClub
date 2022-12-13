const router = require('express').Router();
const Favourite = require('../models/Favourite');

router.get('/myFavourites', async (req, res) => {
    try {
      const favouriteData = await Favourite.findAll({
        include: [
          {
            model: Favourite,
            attributes: ['must_read'],
          }],
      });

      const favourites = favouriteData.map((book) => book.get({ plain: true }));
      res.render('myfavourites', { 
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