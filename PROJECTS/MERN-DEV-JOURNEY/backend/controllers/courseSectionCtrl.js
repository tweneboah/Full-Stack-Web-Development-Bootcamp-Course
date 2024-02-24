const asyncHandler = require("express-async-handler");
const Course = require("../model/Course");
const mongoose = require("mongoose");
const CourseSection = require("../model/CourseSection");
const User = require("../model/User");

const courseSectionCtrl = {
  create: asyncHandler(async (req, res) => {
    //!Find the user
    const userFound = await User.findById(req.user);
    if (!userFound) {
      res.status(404);
      throw new Error("User not found");
    }
    // if (userFound.role !== "instructor") {
    //   res.status(401);
    //   throw new Error(
    //     "You are not authorized to create a course, instructors only"
    //   );
    // }
    //! Get the section name
    const { sectionName } = req.body;
    //! Get the courseID
    const { courseId } = req.params;
    //! Validate the courseid
    if (!mongoose.isValidObjectId(courseId)) {
      throw new Error("Invalid course ID");
    }
    //!Find the course
    const course = await Course.findById(courseId);
    if (!course) {
      throw new Error("Course not found");
    }
    //! validate the section name
    if (!sectionName) {
      throw new Error("Please provide section name");
    }
    //! Create the course section
    const sectionCreated = await CourseSection.create({
      sectionName,
      user: req.user,
    });
    //! Add course section to a course
    course.sections.push(sectionCreated._id);
    //! resave
    await course.save();
    res.json({
      message: "Section created successfully",
      data: sectionCreated,
      status: "success",
    });
  }),
};

module.exports = courseSectionCtrl;
