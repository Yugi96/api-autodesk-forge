const express = require('express')
const passport = require('passport')
const route = express.Router()

route.get('/', (req, res) => {
  let isAuthenticated = req.isAuthenticated()
  let userObject = isAuthenticated ? JSON.parse(req.user) : {}
  let user = isAuthenticated
    ? {
      username: `${userObject.firstName} ${userObject.lastName}`,
      email: userObject.emailId,
      profileImage: userObject.profileImages.sizeX58
    }
    : {}
  res.render('pages/index', { isAuthenticated, title: 'Home', user })
})

route.get('/signin', passport.authenticate('oauth2', {
  scope: ['data:read']
}))

route.get('/signout', (req, res) => {
  req.logOut()
  res.redirect('/')
})

module.exports = route
