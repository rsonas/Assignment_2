/*
    File: server.js
    Aislinn Richardson
    301146892
    Date: June 3 2023
*/

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const configureExpress = require('./config/express');
const configureMongoose = require('./config/mongoose')
const express = require('express');
const session = require('express-session');
const passport = require('passport');

const app = configureExpress();
const db = configureMongoose();

require('./app/routes/index.server.routes')(app);

app.use(express.static('./public'));

app.use(
    session({
      secret: 'secretkey', 
      resave: false,
      saveUninitialized: false,
    })
  );

app.use(passport.initialize());
app.use(passport.session());
  
app.listen(3000);

module.exports = app;

console.log('Server running at http://localhost:3000/');