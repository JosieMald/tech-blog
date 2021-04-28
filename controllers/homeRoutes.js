const router = require('express').Router();
const { User, Post } = require('../models');
// const { route } = require('./api');
const withAuth = require('../utils/auth');

router.get('/login', (req,res) => {
    if(req.session.login) {
        res.redirect('/');
        return;
    }
    res.render('login')
});

router.get('/signup', (req,res) => {
    if(req.session.login) {
        res.redirect('/login')
        return;
    }
    res.render('signup')
});

// Post
router.get('/', async (req,res) => {
    try {
        // Get all posts and JOIN with user data
        const postData = await Post.findAll({
            include: [
                {
                    model: User,
                    attributes: ['user_name'],
                }
            ]
        });

        // Serialize data so the template can read it
        const posts = postData.map((post) => post.get({ plain: true}));

        // Pass serialized data and session flag into template
        res.render('home', {
            posts,
            loggedIn: req.session.loggedIn
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;