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
};

module.exports = courseCtrl;
