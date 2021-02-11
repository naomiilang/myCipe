const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userData = [
    {
        username: 'naomilang',
        email: 'naomilang1212@gmail.com',
        password: 'password123'

    },
    {
        username: 'mr.chef',
        email: 'chef@gmail.com',
        password: 'password123'
    },
    {
        username: 'Chef Bullet',
        email: 'rwcnyla@gmail.com',
        password: 'password1234'
    }
];

const seedUsers = () => User.bulkCreate(userData, {individualHooks: true});

module.exports = seedUsers;