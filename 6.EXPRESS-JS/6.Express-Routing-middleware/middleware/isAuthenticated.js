//Mimic Auth

const isAuthenticated = (req, res, next) => {
  const isLogin = false;
  if (isLogin) {
    next();
  } else {
    res.json({
      message: "Unauthorized",
    });
  }
};

module.exports = isAuthenticated;
