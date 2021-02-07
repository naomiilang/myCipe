// import all models
const Recipe = require('./Recipe');
const User = require('./User');
const Favorite = require('./Favorite');
const Comment = require('./Comment');

// create associations
User.hasMany(Recipe, {
  foreignKey: 'user_id',

});

Recipe.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

User.belongsToMany(Recipe, {
  through: Favorite,
  as: 'favorited_recipes',
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

Recipe.belongsToMany(User, {
  through: Favorite,
  as: 'favorited_recipes',
  foreignKey: 'recipe_id',
  onDelete: 'SET NULL'
});

Favorite.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

Favorite.belongsTo(Recipe, {
  foreignKey: 'recipe_id',
  onDelete: 'SET NULL'
});

User.hasMany(Favorite, {
  foreignKey: 'user_id'
});

Recipe.hasMany(Favorite, {
  foreignKey: 'recipe_id'
});

Comment.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

Comment.belongsTo(Recipe, {
  foreignKey: 'recipe_id',
  onDelete: 'SET NULL'
});

User.hasMany(Comment, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

Recipe.hasMany(Comment, {
  foreignKey: 'recipe_id'
});

module.exports = { User, Recipe, Favorite, Comment };