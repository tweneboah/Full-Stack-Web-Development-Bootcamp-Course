const express = require("express");
const {
  register,
  login,
  logout,
  userProfile,
  checkAuth,
} = require("../controllers/usersController");
const isAuthenticated = require("../middlewares/isAuthenticated");
const { verifyPayment } = require("../controllers/handleStripePayment");

const usersRouter = express.Router();

usersRouter.post("/register", register);
usersRouter.post("/login", login);
usersRouter.post("/logout", logout);
usersRouter.get("/profile", isAuthenticated, userProfile);
usersRouter.get("/auth/check", isAuthenticated, checkAuth);

module.exports = usersRouter;
