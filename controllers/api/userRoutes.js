const router = require('express').Router();
const { User } = require('../../models');

// Creates new user
router.post('/', async (req, res) => {
  try {
    const userData = await User.create({
      user_name: req.body.username,
      password: req.body.password,
    });
    console.log(userData);

    req.session.save(() => {
      req.session.userId = userData.id;
      req.session.loggedIn = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

// User login
router.post('/login', async (req, res) => {
  console.log(req.body.username);
  try {
    const userData = await User.findOne({ where: { user_name: req.body.username } });
console.log(userData);
    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect username, please try again' });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);
console.log(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.userId = userData.id;
      req.session.loggedIn = true;
      req.session.user_name = userData.user_name
      res.json({ user: userData, message: 'You are now logged in!' });
    });

  } catch (err) {
    res.status(400).json(err);
  }
});

// User logsout
router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
