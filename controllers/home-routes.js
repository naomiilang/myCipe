const router = require('express').Router();
const sequelize = require('../config/connection');
const { Recipe, User, Favorite, Comment } = require('../models');


router.get('/', (req, res) => {
  res.render('homepage');
});
router.get('/create', (req, res) => {
  res.render('createrecipe', {
    loggedIn: req.session.loggedIn
  }
  );
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
  Recipe.findAll({
    attributes: [
      'id',
      'title',
      'recipe_text',
      // 'user_id'
    ],
    include: [
      {
        model: User,
        attributes: ['username']
      }
    ]
  }).then((dbRecipeData) => {
    const recipes = dbRecipeData.map(recipe => recipe.get({ plain:true }));
      res.render('dashhome', {
        recipes,
        loggedIn: req.session.loggedIn
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});
router.get('/my', (req, res) => {
  res.render('myrecipes');
});
router.get('/create', (req, res) => {
  res.render('createrecipe');
});

//get single recipe
router.get('/recipe/:id', (req, res) => {
  Recipe.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
      'id',
      'title',
      'created_at',
      'recipe_text',
      'ingredients_text',
      'directions_text'
      // [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE post.id = vote.post_id)'), 'vote_count']
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

      // serialize the data
      const recipe = dbRecipeData.get({ plain: true });

      // pass data to template
      res.render('single-recipe', { recipe,
      loggedIn: req.session.loggedIn
     });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});


module.exports = router;