const router = require('express').Router();
const sequelize = require('../config/connection');
const { Recipe, User, Favorite, Comment } = require('../models');

module.exports = router;