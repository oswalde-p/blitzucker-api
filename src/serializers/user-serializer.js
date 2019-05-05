const serializeUser = function(user) {
  return { user: {
    id: user._id,
    email: user.email
  }}
}

module.exports = { serializeUser }
