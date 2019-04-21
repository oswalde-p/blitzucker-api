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
