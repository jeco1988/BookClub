const router = require('express').Router();
const { User } = require('../../models');

router.post('/', async (req, res) => {
  try {
    const userData = await User.create(req.body);

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { user_name: req.body.data.user_name } });

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }
     console.log(userData.password);

    // const validPassword = await userData.checkPassword(req.body.data.password);
    let validPassword = (req.body.data.password === userData.password ? true : false);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }
   
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.render('favourites');
      
      // res.json({ user: userData, message: 'You are now logged in!' });
    });

  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/logout', (req, res) =>{
  req.session.destroy()
  res.render('login');
});

module.exports = router;