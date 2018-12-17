exports.isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) next()
  res.redirect('/')
}
