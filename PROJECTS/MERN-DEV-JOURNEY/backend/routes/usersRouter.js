const express = require("express");
const usersCtrl = require("../controllers/users");
const isAuthenticated = require("../middlewares/isAuth");
const usersRouter = express.Router();

usersRouter.post("/api/v1/users/register", usersCtrl.register);
usersRouter.post("/api/v1/users/login", usersCtrl.login);
usersRouter.get("/api/v1/users/profile", isAuthenticated, usersCtrl.profile);

module.exports = usersRouter;
