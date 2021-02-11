const router = require('express').Router();
const sequelize = require('../config/connection');
const { Recipe, User, Favorite, Comment } = require('../models');


router.get('/', (req, res) => {
    res.render('homepage');
  });
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/dash');
    return;
  }
    res.render('login');
  });
router.get('/signup', (req, res) => {
    res.render('signup');
  });
router.get('/dash', (req, res) => {
    res.render('dashhome');
  });
  router.get('/my', (req, res) => {
    res.render('myrecipes');
  });
  router.get('/create', (req, res) => {
    res.render('createrecipe');
  });
//   router.get('/login', (req, res) =>{

//   })
module.exports = router;