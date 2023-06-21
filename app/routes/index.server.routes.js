/*
    File: index.server.routes.js
    Aislinn Richardson
    301146892
    Date: May 28 2023
*/

var indexController = require('../controllers/index.server.controller');

const passport = require('passport');
const flash = require('connect-flash');

function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    }
    res.redirect('/login');
}

module.exports = function(app) {    

    // Defines routes
    app.get('/', indexController.renderHomePage);
    app.get('/about', indexController.renderAboutMePage);
    app.get('/services', indexController.renderServicesPage);
    app.get('/contact', indexController.renderContactMePage);
    app.get('/projects', indexController.renderProjectsPage);

    app.get('/login', indexController.renderLoginPage);
    app.post('/login', indexController.login);
    
    app.get('/businessContacts', ensureAuthenticated, indexController.renderBusinessContactsPage);
    app.get('/update', ensureAuthenticated, indexController.renderUpdatePage);

};

