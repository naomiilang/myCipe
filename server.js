const path = require('path');
<<<<<<< HEAD

const express = require('express');
const routes = require('./controllers');
const sequelize = require('./config/connection');

const helpers = require('./utils/helpers');

const app = express();
const PORT = process.env.PORT || 3001;

// set up handlebars
const exphbs = require('express-handlebars');
const hbs = exphbs.create({ helpers });

const session = require('express-session');

const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
  secret: 'Chefs secret recipe',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));
=======
const express = require('express');
const routes = require('./controllers');
const sequelize = require('./config/connection');
const exphbs = require('express-handlebars');
// const session = require('express-session');

// const SequelizeStore = require('connect-session-sequelize')(session.Store);

// const sess = {
//   secret: 'Super secret secret',
//   cookie: {},
//   resave: false,
//   saveUninitialized: true,
//   store: new SequelizeStore({
//     db: sequelize
//   })
// };

const app = express();
const PORT = process.env.PORT || 3001;
const hbs = exphbs.create({});
>>>>>>> aedd7df776c81d1ed4f53249e8b6cff40b4866eb

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
<<<<<<< HEAD
app.use(express.urlencoded({ extended:true }));
app.use(express.static(path.join(__dirname, 'public')));

//turn on routes
app.use(routes);

//turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now Listening for Server'));
});


=======
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
// app.use(session(sess));

// turn on routes
app.use(routes);

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
>>>>>>> aedd7df776c81d1ed4f53249e8b6cff40b4866eb
