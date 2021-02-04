const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Favorite, Comment } = require('../models');

module.exports = router;