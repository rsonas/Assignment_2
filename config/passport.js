passport.use(new LocalStrategy({
  usernameField: 'username', 
  passwordField: 'password' 

}, (username, password, done) => {
  User.findOne({ username: username }, (err, user) => {
    if (err) {
      return done(err);
    }
    if (!user) {
      return done(null, false, { message: 'Incorrect username.' });
    }
    if (!user.validPassword(password)) {
      return done(null, false, { message: 'Incorrect password.' });
    }
    return done(null, user);
  });
}));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());