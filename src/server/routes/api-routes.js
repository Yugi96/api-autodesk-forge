const express = require('express')
const passport = require('passport')
const route = express.Router()

route.get('/auth/callback', passport.authenticate('oauth2'), (req, res) => {
  req.logIn(req.user, (error) => {
    if (error) console.log('error')
    res.redirect('/')
  })
})

module.exports = route
