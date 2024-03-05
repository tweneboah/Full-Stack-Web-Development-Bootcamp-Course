const express = require("express");
const isAuthenticated = require("../middlewares/isAuth");
const courseSectionCtrl = require("../controllers/courseSectionCtrl");

const courseSectionRouter = express.Router();

courseSectionRouter.post(
  "/api/v1/course-sections/create/:courseId",
  isAuthenticated,
  courseSectionCtrl.create
);
courseSectionRouter.get("/api/v1/course-sections", courseSectionCtrl.lists);
courseSectionRouter.put(
  "/api/v1/course-sections/:sectionId",
  isAuthenticated,
  courseSectionCtrl.update
);
courseSectionRouter.get(
  "/api/v1/course-sections/:sectionId",
  courseSectionCtrl.update
);
courseSectionRouter.delete(
  "/api/v1/course-sections/:sectionId",
  isAuthenticated,
  courseSectionCtrl.delete
);

module.exports = courseSectionRouter;
