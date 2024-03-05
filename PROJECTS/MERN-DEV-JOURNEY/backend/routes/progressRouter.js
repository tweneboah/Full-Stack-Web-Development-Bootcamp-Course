const express = require("express");
const isAuthenticated = require("../middlewares/isAuth");
const progressController = require("../controllers/progressCtrl");
const progressRouter = express.Router();

progressRouter.post(
  "/api/v1/progress",
  isAuthenticated,
  progressController.applyToCourse
);
progressRouter.put(
  "/api/v1/progress/start-section",
  isAuthenticated,
  progressController.startSection
);
progressRouter.put(
  "/api/v1/progress/update",
  isAuthenticated,
  progressController.update
);

module.exports = progressRouter;
