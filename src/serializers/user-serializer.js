const serializeUser = function(user) {
  return { user: {
    id: user._id,
    email: user.email,
    isAdmin: user.isAdmin
  }}
}

module.exports = { serializeUser }
