const asyncHandler = require("express-async-handler");
const User = require("../model/User");
const Course = require("../model/Course");

const courseCtrl = {
  create: asyncHandler(async (req, res) => {
    const { title, description, difficulty, duration } = req.body;
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
    console.log(userFound);
    //!Validate the user input
    if (!title || !description || !difficulty || !duration) {
      throw new Error("Please provide all fields");
    }
    //! Check i course already exists
    const courseFound = await Course.findOne({ title });
    if (courseFound) {
      throw new Error("Course already exists");
    }
    //!Create the course
    const courseCreated = await Course.create({
      title,
      description,
      difficulty,
      duration,
      user: req.user,
    });
    //!Push the course
    userFound.coursesCreated.push(courseCreated._id);
    //!Resave the user
    await userFound.save();
    //! Send the response
    res.json(courseCreated);
  }),
  //! Getting all courses
  lists: asyncHandler(async (req, res) => {
    const courses = await Course.find().populate("sections").populate({
      path: "user",
      model: "User",
      select: "username email",
    });
    res.json(courses);
  }),
  //! get a  course
  getCourseById: asyncHandler(async (req, res) => {
    const course = await Course.findById(req.params.courseId)
      .populate("sections")
      .populate({
        path: "user",
        model: "User",
        select: "username email",
      });
    res.json(course);
  }),
  // ! Update course
  update: asyncHandler(async (req, res) => {
    const course = await Course.findByIdAndUpdate(
      req.params.courseId,
      req.body,
      { new: true }
    );
    if (course) {
      res.json(course);
    } else {
      res.status(404);
      throw new Error("Course not found");
    }
  }),
  // ! Delete course
  delete: asyncHandler(async (req, res) => {
    //! Find the course
    const courseFound = await Course.findById(req.params.courseId);
    console.log(courseFound);
    //! Prevent deletion if a course a student
    if (courseFound && courseFound.students.length < 0) {
      res.status(400);
      res.json({ message: "Course has studuents, cannot delete" });
      return; //Stop execution
    }
    //!Proceed to delete
    const course = await Course.findByIdAndDelete(req.params.courseId);
    if (course) {
      //* Remove from the user's course created
      await User.updateMany(
        { coursesCreated: req.params.courseId },
        {
          $pull: { coursesCreated: req.params.courseId },
        }
      );
      //!Send the response
      res.json(course);
    } else {
      res.json({ message: "Course not found" });
    }
  }),
};

module.exports = courseCtrl;
