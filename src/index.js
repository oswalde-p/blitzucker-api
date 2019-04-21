require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const session = require('express-session')
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const uuid = require('uuid/v4')

const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

const config = require('./config')
const mongoConnection = require('./mongo-connection')
const auth = require('./middleware/auth')
const userRouter = require('./routes/user-router')
const historyRouter = require('./routes/history-router')

const PORT = config.PORT
const app = express()

app.use(morgan('tiny'))
app.use(cors())

app.use(bodyParser.json())
app.use(cookieParser())

app.disable('x-powered-by')

app.use(session({
  genid: (req) => {
    return uuid()
  },
  secret: 'shhhh',
  resave: false,
  saveUninitialized: true
}))

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

app.use(passport.initialize())
app.use(passport.session())


app.get('/', (req, res) => {
  const id = req.sessionID
  res.send(`hoooooome! id: ${id}\n`)
})


app.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) {
      return res.status(400).send('Bad credentials 1')
    }
    req.login(user, (err) => {
      if(err) {
        return res.status(400).send(info.message)
      }
      return res.send('You were authenticated & logged in!\n');
    })
  })(req, res, next);
})

//routes
app.get('/-/readiness', (_, res) => res.sendStatus(200))
app.get('/-/liveness', (_, res) => {
  if(mongoConnection.connection.readyState == 1) return res.sendStatus(200)
  res.sendStatus(500)
})

app.use('/users', auth, userRouter)
app.use('/history', auth, historyRouter)


app.listen(PORT, r => { console.log(`Server listening on port ${PORT}`)})
