<<<<<<< HEAD
// import the Sequelize constructor from the library
=======
>>>>>>> aedd7df776c81d1ed4f53249e8b6cff40b4866eb
const Sequelize = require('sequelize');

require('dotenv').config();

// create connection to our db
<<<<<<< HEAD
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
  host: 'localhost',
  dialect: 'mysql',
  port: 3306
});
=======
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306
    });
>>>>>>> aedd7df776c81d1ed4f53249e8b6cff40b4866eb

module.exports = sequelize;