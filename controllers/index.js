const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes');
const favouriteRoutes = require('./home-routes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('./favourite', homeRoutes);
router.use('./recentreviews', homeRoutes);

module.exports = router;