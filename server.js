// Loads express module
const express = require('express');
// Creates our express server
const app = express();
const port = 3001;
// const PORT = process.env.PORT || 3001;

// Loads express and handlebars module
const exphbs = require('express-handlebars');

// Sets handlebars configs
app.engine('handlebars', handlebars({
    layoutsDir:__dirname + '/views/layouts',
}));

// Serves static files
app.use(express.static('public'))

app.get('/', (req,res) => {
    res.render('main', {layout : 'main'});
})

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Serves static files
app.use(express.static('public'))
// app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req,res) => 
    res.send('Hello World'));






    app.listen(port, () =>
    console.log(`App listening to port ${port}`));

    // sequelize.sync({ force: false }).then(() => {
    //     app.listen(PORT, () => console.log('Now listening'));
    //   });