/*
    File: index.server.controller.js
    Aislinn Richardson
    301146892
    Date: May 28 2023
*/

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user');
const flash = require('connect-flash');

exports.render = function(req, res) {
    if (req.session.lastVisit) {
        console.log(req.session.lastVisit);
    }
    req.session.lastVisit = new Date();
    res.render('index', {
        title: 'Hello World'
    });
};

/* GET home page */
exports.renderHomePage = function(req, res) {
    res.render('home', {
        title: 'Home',
        h1: "Welcome:",
        p1: "My name is Aislinn Richardson and I have designed this website as a way to connect with future employers and show my web design capabilities. <br>This website features a short introduction, a way to contact me, some of the services i offer, and some past projects I would like to showcase.",
        currentPage: 'home'
    });

};

/* GET about me page */
exports.renderAboutMePage = function(req, res) {
    res.render('index', {
        title: 'About Me',
        h1: "Aislinn Richardson <br>301146892 <br>",
        p1: "<img src = '/img/selfImage.jpg' width = 100px>",
        p2: "My name is Aislinn Richardson, I am a 20 year old college student currently in my fourth semester at Centennial College.<br>I am in the software engineering - artificial intelligence program. <br>I have always been passionate about programming, and my favourite languages are Python, C#, and mySQL.<br><br>Beyond programming, I have been a  hobby baker for 16 years, and I enjoy running when I have time to. Two of my favourite subjects growing up were math and history",
        p3: "<a style = 'color: black' href='/assets/Aislinn_Richardson_Resume.pdf'>My Resume</a>",
        im1: "",
        im2: "",
        im3:"",
        currentPage: 'about'
    });

};

/* GET contact me page */
exports.renderContactMePage = function(req, res) {
    res.render('contact', {
        title: 'Contact Me',
        h1: "Place a phone call at: +1 (905)-441-8895 <br>Email at: aricha61@my.centennialcollege.ca",
        currentPage: 'contact'
    });

};

/* GET services page */
exports.renderServicesPage = function(req, res) {
    res.render('index', {
        title: 'Services',
        h1: "Some of the Services I offer are: ",
        p1: "MySql Database creation:<br>Can create functional MySql database for all needs. Database can be designed to fit your company's needs.",
        im1: "<img src = '/img/sql_programming.jpg' style = 'width: 800px'>",
        p2: "Code Debugging: <br>Able to troubleshoot and debug problems within code that may have been missed. Will take time to go through and thoroughly check to make sure there is nothing that could cause the program to fail.",
        im2: "<img src = '/img/java_programming.jpg' style = 'width: 800px'>",
        p3: "Small Script Design: <br>Whether it be a small script needed for your websites functionality, or a script that does in-depth analysis of code, I can provide working python scripts for any coding need.",
        im3: "<img src = '/img/python_programming.jpg' style = 'width: 800px'>",
        currentPage: 'projects'
    });

};

/* GET projects page */
exports.renderProjectsPage = function(req, res) {
    res.render('projects', {
        title: 'Projects',
        h1: "Some Projects I have Been working on:",
        p1: "Python MNIST Dataset Analysis",
        p2: "Using different algorithms to try and determine the outcome and guess specific numbers from the MNIST dataset (a dataset filled with thousands of hand drawn numbers.)<br>We worked on determining the correct algorithm for this dataset, and why it was the best for the data.<br>In this case, logistic regression was the best fit.",
        p3: "JavaScript Canvas Bug Smasher game:",
        p4: "An interactive HTML canvas game called Bug Smasher!<br>The Objective of this game is to catch as many bugs as you can, with each bug caught gradually speeding up. The bug will randomly jump around on the screen getting progressively harder to catch.",
        p5: "SQL Table Creation",
        p6: "MySQL Table creation and exploration.<br>In this exercise, the objective was to create and populate a table with information for a guest booking system at a hotel.<br>You could determine bed size, book personal information, and make notes based on how your stay was.",
        currentPage: 'services'
    });

};

exports.renderLoginPage = function (req, res) {
    res.render('login', {
      title: 'Login',
      h1: '',
      messages: req.flash('error') || req.flash('info'),
    });
  };
  
  exports.login = function (req, res, next) {
    passport.authenticate('local', function (err, user, info) {
      if (err) {
        return next(err);
      }
      if (!user) {
        req.flash('error', 'Invalid username or password');
        return res.redirect('/login');
      }
      req.logIn(user, function (err) {
        if (err) {
          return next(err);
        }
        return res.redirect('/businessContacts'); // Redirect to businessContacts page on successful login
      });
    })(req, res, next);
  };

exports.renderBusinessContactsPage = function(req, res) {
    res.render('businessContacts.ejs', {
        title: 'Business Contacts',
        h1: 'Business Contacts'
    });
};

exports.renderUpdatePage =  function(req, res) {
    res.render('update.ejs', {
        title: 'Update',
        h1: 'update'
    });
};