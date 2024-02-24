const express = require("express");
const isAuthenticated = require("../middlewares/isAuth");
const courseSectionCtrl = require("../controllers/courseSectionCtrl");

const courseSectionRouter = express.Router();

courseSectionRouter.post(
  "/api/v1/course-sections/create/:courseId",
  isAuthenticated,
  courseSectionCtrl.create
);

module.exports = courseSectionRouter;
