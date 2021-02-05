const { Post } = require('../models');

const postData = [
    {
        title: 'Making Spaghetti',
        post_text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        ingredients_text: 'tomato, salt, pepper, parmesean',
        directions_text: 'boil pasta, make sauce, eat!'
    },
    {
        title: 'Baking Cake',
        post_text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        ingredients_text: 'cake mix, oil, egg',
        directions_text: 'mix ingredients, bake, eat!'
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;