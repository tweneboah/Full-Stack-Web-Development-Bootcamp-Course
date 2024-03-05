const asyncHandler = require("express-async-handler");
const User = require("../model/User");
const Course = require("../model/Course");

const progressController = {
  //!Apply to a course
  applyToCourse: asyncHandler(async (req, res) => {
    const userId = req.user;
    const { courseId } = req.body;

    //! Find the user
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    //!Check if the user is already enrolled in the course
    const isAlreadyEnrolled = user.progress.some(
      (progress) => progress.courseId.toString() === courseId.toString()
    );
    if (isAlreadyEnrolled) {
      return res
        .status(400)
        .json({ message: "You have already enrolled in this course" });
    }
    //! Validate the course
    const course = await Course.findById(courseId);
    console.log(course);
    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }
    //!Add the course to user's progress
    user.progress.push({ courseId, sections: [] });
    //!resave
    await user.save();
    //! Push the user to the course
    course.students.push(userId);
    await course.save();

    res.status(200).json({ message: "Application to course successful" });
  }),
  //!-----Start a section----
  startSection: asyncHandler(async (req, res) => {
    const { courseId, sectionId } = req.body;
    //! Find the user
    const userId = req.user;
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    console.log(user);
    //! Find the course progress
    const courseProgress = user.progress.find(
      (p) => p.courseId.toString() === courseId
    );
    if (!courseProgress) {
      return res
        .status(404)
        .json({ message: "Course not found in user's progress " });
    }
    //! Check if section is already started
    const existingSection = courseProgress.sections.find(
      (s) => s.sectionId.toString() === sectionId
    );
    if (existingSection) {
      return res.status(400).json({ message: "Section already started" });
    }
    //! Add the new section to the course progress
    courseProgress.sections.push({ sectionId, status: "Not Started" });
    await courseProgress.save();
    await user.save();
    //! Send the res
    res.status(200).json({ message: "Section started successfully" });
  }),
  //!-----Update progress----
  update: asyncHandler(async (req, res) => {
    const { courseId, sectionId, newStatus } = req.body;
    //! Find the user and the specific course progress
    const userId = req.user;
    const user = await User.findOne({
      _id: userId,
      "progress.courseId": courseId,
    });
    if (!user) {
      return res.status(404).json({ message: "User or course not found" });
    }
    //! Find and update the specific section status
    const courseProgress = user.progress.find(
      (p) => p.courseId.toString() === courseId
    );
    const sectionProgress = courseProgress.sections.find(
      (s) => s.sectionId.toString() === sectionId
    );
    if (sectionProgress) {
      sectionProgress.status = newStatus;
      await sectionProgress.save();
    } else {
      return res
        .status(404)
        .json({ message: "Section not found in user's progress" });
    }
    await user.save();
    //! Send the response
    res.status(200).json({ message: "Section progress updated successfully" });
  }),
};

module.exports = progressController;
