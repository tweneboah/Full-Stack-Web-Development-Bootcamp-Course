const express = require("express");
const User = require("../models/User");
const { getProfile } = require("../controllers/userController");
const { ensureAuthenticated } = require("../middlewares/auth");

const userRoutes = express.Router();

//Get profile
userRoutes.get("/profile", ensureAuthenticated, getProfile);

module.exports = userRoutes;
