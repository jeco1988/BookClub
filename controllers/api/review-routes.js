const router = require('express').Router();
const { Review } = require('../../models/Review');
const withAuth = require('../../utils/auth');

router.post('/recentreviews', withAuth, async (req, res) => {
    try {
      const newReview = await Review.create({
        ...req.body,
        user_id: req.session.user_id,
      });
  
      res.status(200).json(newReview);
    } catch (err) {
      res.status(400).json(err);
    }
  });

  module.exports = router;