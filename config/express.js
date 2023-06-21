/*
    File: express.js
    Aislinn Richardson
    301146892
    Date: May 31 2023
*/

var config = require('./config'),
express = require('express'),
morgan = require('morgan'),
compress = require('compression'),
bodyParser = require('body-parser'),
session = require('express-session'),
methodOverride = require('method-override'),
passport = require('passport'),
passportLocal = require('passport-local'),
flash = require('connect-flash')

module.exports = function() {  
    const app = express();  

    // get css for index
    app.get('/content/index.css', function(req, res) {
        res.sendFile('index.css', { root: './public/content' });
    });

    // get css for contact
    app.get('/content/contact.css', function(req, res) {
        res.sendFile('contact.css', { root: './public/content' });
    });

    // get css for home
    app.get('/content/home.css', function(req, res) {
        res.sendFile('home.css', { root: './public/content' });
    });

    // get css for projects
    app.get('/content/projects.css', function(req, res) {
        res.sendFile('projects.css', { root: './public/content' });
    });


    if (process.env.NODE_ENV === 'development') {    
        app.use(morgan('dev'));  
    } else if (process.env.NODE_ENV === 'production') {    
        app.use(compress());  
    }  app.use(bodyParser.urlencoded({    
            extended: true  
        }));  
        app.use(bodyParser.json());  
        app.use(methodOverride());

        app.use(session({
            saveUninitialized: true,
            resave: true,
            secret: config.sessionSecret
        }));

        app.use(passport.initialize());
        app.use(passport.session());
        app.use(flash());

        app.set('views', './app/views');
        app.set('view engine', 'ejs');  

        require('../app/routes/index.server.routes.js')(app);  
        app.use(express.static('./public'));
        app.use(express.static('/assets'));

        return app;
};