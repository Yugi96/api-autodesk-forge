const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const session = require('express-session')
const MongoDBStore = require('connect-mongodb-session')(session)
const passport = require('passport')
const passportConfig = require('./config/passport')
const config = require('./config/config')

const app = express()
const store = new MongoDBStore({
  uri: config.MONGODD_SESSIONS_URL
})

app.set('port', config.PORT || 3000)
app.set('views', path.join(__dirname, './views'))
app.set('view engine', 'ejs')

app.use(session({
  secret: 'secreto',
  resave: true,
  saveUninitialized: true,
  store: store
}))
app.use(passport.initialize())
app.use(passport.session())
app.use(express.static(path.join(__dirname, './../public')))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/app', require('./routes/app-routes'))
app.use('/api', require('./routes/api-routes'))
app.use('/', require('./routes/routes'))

app.listen(app.get('port'), () => {
  console.log(`Server running on http://localhost:${app.get('port')}`)
})
