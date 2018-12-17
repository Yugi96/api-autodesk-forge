const passport = require('passport')
const Oauth2Strategy = require('passport-oauth2')
const profileController = require('./../controllers/api-controller/profile')
const config = require('./config')

passport.serializeUser((user, callback) => {
  callback(null, user.token)
})

passport.deserializeUser((token, callback) => {
  profileController.getProfile(token, (error, user) => {
    callback(error, user)
  })
})

passport.use(new Oauth2Strategy({
  authorizationURL: 'https://developer.api.autodesk.com/authentication/v1/authorize',
  tokenURL: 'https://developer.api.autodesk.com/authentication/v1/gettoken',
  clientID: config.FORGE_CLIENT_ID,
  clientSecret: config.FORGE_CLIENT_SECRET,
  callbackURL: config.FORGE_REDIRECT_URI
}, (accessToken, refreshToken, profile, callback) => {
  profileController.getProfile(accessToken, (error, user) => {
    let userObject = JSON.parse(user)
    userObject.token = accessToken
    callback(error, userObject)
  })
}))
