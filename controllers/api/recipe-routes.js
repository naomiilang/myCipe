const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Recipe, User, Comment, Favorite } = require('../../models');
const withAuth = require('../../utils/auth');
// get all users
router.get('/', (req, res) => {
  console.log('======================');
  Recipe.findAll({
    attributes: [
      'id',
      'recipe_url',
      'title',
      'created_at',
      [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE recipe.id = favorite.recipe_id)'), 'favorite_count']
    ],
    include: [
      {
        model: Comment,
        attributes: ['id', 'comment_text', 'recipe_id', 'user_id', 'created_at'],
        include: {
          model: User,
          attributes: ['username']
        }
      },
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then(dbRecipeData => res.json(dbRecipeData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});
router.get('/:id', (req, res) => {
  Recipe.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
      'id',
      'recipe_url',
      'title',
      'created_at',
      [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE recipe.id = favorite.recipe_id)'), 'favorite_count']
    ],
    include: [
      {
        model: Comment,
        attributes: ['id', 'comment_text', 'recipe_id', 'user_id', 'created_at'],
        include: {
          model: User,
          attributes: ['username']
        }
      },
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then(dbRecipeData => {
      if (!dbRecipeData) {
        res.status(404).json({ message: 'No recipe found with this id' });
        return;
      }
      res.json(dbRecipeData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});
router.post('/', withAuth, (req, res) => {
  // expects {title: 'Taskmaster goes public!', Recipe_url: 'https://taskmaster.com/press', user_id: 1}
  Recipe.create({
    title: req.body.title,
    recipe_url: req.body.recipe_url,
    user_id: req.session.user_id
  })
    .then(dbRecipeData => res.json(dbRecipeData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});
router.put('/upvote', withAuth, (req, res) => {
  // custom static method created in models/Post.js
  Recipe.upvote({ ...req.body, user_id: req.session.user_id }, { Favorite, Comment, User })
    .then(updatedFavoriteData => res.json(updatedFavoriteData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});
router.put('/:id', withAuth, (req, res) => {
  Recipe.update(
    {
      title: req.body.title
    },
    {
      where: {
        id: req.params.id
      }
    }
  )
    .then(dbRecipeData => {
      if (!dbRecipeData) {
        res.status(404).json({ message: 'No Recipe found with this id' });
        return;
      }
      res.json(dbRecipeData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});
router.delete('/:id', withAuth, (req, res) => {
  console.log('id', req.params.id);
  Recipe.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbRecipeData => {
      if (!dbRecipeData) {
        res.status(404).json({ message: 'No recipe found with this id' });
        return;
      }
      res.json(dbRecipeData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});
module.exports = router;
