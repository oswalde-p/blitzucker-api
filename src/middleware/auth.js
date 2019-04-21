module.exports = function(req, res, next) {
  if (req.isAuthenticated()) {
    next(req, res)
  } else {
    res.redirect(302, '/login')
  }
}


