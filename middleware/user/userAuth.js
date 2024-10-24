const userAuth = (req, res, next) => {
  if (req.session && req.session.isLoggedIn) {
    return next();
  }
  res.redirect("/login"); // Redirect to login if not authenticated
};

module.exports = userAuth;
