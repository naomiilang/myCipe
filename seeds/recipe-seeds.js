const { Recipe } = require('../models');

const recipeData = [
    {
        title: 'Making Spaghetti',
        recipe_text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        ingredients_text: 'tomato, salt, pepper, parmesean',
        directions_text: 'boil pasta, make sauce, eat!',
        user_id: 1
    },
    {
        title: 'Baking Cake',
        recipe_text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        ingredients_text: 'cake mix, oil, egg',
        directions_text: 'mix ingredients, bake, eat!',
        user_id: 1
    }
];

const seedRecipes = () => Recipe.bulkCreate(recipeData);

module.exports = seedRecipes;