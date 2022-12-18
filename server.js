const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const session = require("express-session");
const PORT = process.env.PORT || 3001;
const sequelize = require('./config/connection');
const routes = require('./controllers')
const hbs = exphbs.create({});
const app = express();

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');


// session
app.use(session({ secret: "secret", resave: true, saveUninitialized: true }));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(require('./controllers/index.js'));
app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});