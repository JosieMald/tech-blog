const router = require('express').Router();
const { User } = require('../models');
const { route } = require('./api');

router.get('/login', (req,res) => {
    if(req.session.login) {
        res.redirect('/');
        return;
    }
    res.render('login')
});

// call to post model to find all posts and inside we are 
// include: [User] then map over all posts for singular post to 
// res.render the post that belongs to that user
router.get('/', (req,res) => {
    res.render('home')
});

module.exports = router;