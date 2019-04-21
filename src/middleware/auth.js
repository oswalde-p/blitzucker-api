
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy

const users = [{id: 1, email: 'bob', password: 'password'}]

passport.use(new LocalStrategy(
  { usernameField: 'email' },
  (email, password, done) => {
    // here is where you make a call to the database
    // to find the user based on their username or email address
    // for now, we'll just pretend we found that it was users[0]
    console.log(email)
    console.log(password)
    const user = users[0]
    if(email === user.email && password === user.password) {
      return done(null, user)
    }
    return done("Bad credentials 3", null)
  }
))

// tell passport how to serialize the user
passport.serializeUser((user, done) => {
  done(null, user.id);
})

passport.deserializeUser((id, done) => {
  const user = users[0].id === id ? users[0] : false;
  done(null, user);
})

module.exports = function(req, res, next) {
  if (req.isAuthenticated()) {
    next(req, res)
  } else {
    res.redirect(302, '/login')
  }
}


