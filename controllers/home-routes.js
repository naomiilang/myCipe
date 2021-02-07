const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Favorite, Comment } = require('../models');


router.get('/', (req, res) => {
    res.render('homepage');
  });
  
module.exports = router;