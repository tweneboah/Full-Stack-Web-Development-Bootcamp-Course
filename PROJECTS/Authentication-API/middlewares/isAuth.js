const jwt = require("jsonwebtoken");
const isAuthenticated = async (req, res, next) => {
  //! Get the token from the header
  const headerObj = req.headers;
  const token = headerObj.authorization.split(" ")[1];

  //Verify token
  const verifyToken = jwt.verify(token, "anyKey", (err, decoded) => {
    if (err) {
      return false;
    } else {
      return decoded;
    }
  });
  if (verifyToken) {
    //save the user into req.obj
    req.user = verifyToken.id;
    next();
  } else {
    const err = new Error("Token expired please login again");
    next(err);
  }
};

module.exports = isAuthenticated;
