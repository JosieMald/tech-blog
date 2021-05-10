const router = require('express').Router();
const { Post } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  console.log(req.body);
  console.log(req.session);

  try {
    const postData = await Post.create({
      title: req.body.title,
      body: req.body.body,
      user_id: req.session.userId,
    });

    res.status(200).json(postData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const postData = await Post.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.userId,
      },
    });

    if (!postData) {
      res.status(404).json({ message: 'No post found from this user!' });
      return;
    }

    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
