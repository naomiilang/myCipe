const { Comment, Recipe } = require('../models');

const commentData = [
    {
        comment_text: 'nice recipes!',
        user_id: 1,
        recipe_id: 1,
    },
    {
        comment_text: 'sounds delicious.',
        user_id: 2,
        recipe_id: 2
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;