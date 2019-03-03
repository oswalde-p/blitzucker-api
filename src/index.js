require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const cors = require('cors')
const https = require('https')
const fs = require('fs')

const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

const config = require('./config')
const userRouter = require('./routes/user-router')
const historyRouter = require('./routes/history-router')

const PORT = config.PORT
const mongooseConnectionString = config.MONGO_CONNECTION_STRING
const app = express()

app.use(morgan('tiny'))
app.use(cors())

app.use(bodyParser.json())
app.use(cookieParser())

app.disable('x-powered-by')

//mongoose
mongoose.connect(mongooseConnectionString, {useNewUrlParser: true},  err => {
  if (err) {
    console.log('Error connecting to mongodb')
    console.log(`String: ${mongooseConnectionString}`)
    console.error(err)
  } else {
    console.log('Mongo connection successful')
  }
})

//routes
app.get('/api/~/readiness', (_, res) => res.sendStatus(200))
app.get('/api/~/liveness', (_, res) => {
  if(mongoose.connection.readyState == 1) return res.sendStatus(200)
  res.sendStatus(500)
})

app.use('/api/users', userRouter)
app.use('/api/history', historyRouter)


app.listen(PORT, r => { console.log(`Server listening on port ${PORT}`)})

// const options = {
//   key: fs.readFileSync('src/ssl/server.key'),
//   cert: fs.readFileSync('src/ssl/server.cert')
// };

// https.createServer(options, app).listen(PORT,() => console.log('Listening on port ' + PORT))
