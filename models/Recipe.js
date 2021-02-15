const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Recipe extends Model {
  static upvote(body, models) {
    return models.Favorite.create({
      user_id: body.user_id,
      recipe_id: body.recipe_id
    }).then(() => {
      return Recipe.findOne({
        where: {
          id: body.recipe_id
        },
        attributes: [
          'id',
          'title',
          'recipe_url',
          'recipe_text',
          'ingredients_text',
          'directions_text',
          'created_at',
          [sequelize.literal('(SELECT COUNT(*) FROM favorite WHERE recipe.id = favorite.recipe_id)'), 'favorite_count']
        ],
        include: [
          {
            model: models.Comment,
            attributes: ['id', 'comment_text', 'recipe_id', 'user_id', 'created_at'],
            include: {
              model: models.User,
              attributes: ['username']
            }
          }
        ]
      });
    });
  }
}

Recipe.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      recipe_url: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          isURL: true
        }
      },
      recipe_text: {
        type: DataTypes.TEXT,
        allowNull: true,
        validate: {
            len: [1]
        }
      },
      ingredients_text: {
        type: DataTypes.TEXT,
        allowNull: true,
        validate: {
            len: [1]
        }
      },
      directions_text: {
        type: DataTypes.TEXT,
        allowNull: true,
        validate: {
            len: [1]
        }
      },
      user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'user',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      freezeTableName: true,
      underscored: true,
      modelName: 'recipe'
    }
);
  
module.exports = Recipe;