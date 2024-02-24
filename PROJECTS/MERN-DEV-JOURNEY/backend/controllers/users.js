const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const User = require("../model/User");

const usersCtrl = {
  //!register
  register: asyncHandler(async (req, res) => {
    const { username, email, password } = req.body;
    //validate
    if (!username || !email || !password) {
      throw new Error("Please all fields are required");
    }
    //Check if user alreasy exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      throw new Error("User already exists");
    }
    //Hash the user password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    //Create the user
    const userCreated = await User.create({
      email,
      username,
      password: hashedPassword,
    });
    //send the response
    res.json({
      username: userCreated.username,
      role: userCreated.role,
      email: userCreated.email,
      id: userCreated._id,
    });
  }),
  // ! Login
  login: asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    //!Check if user email exists
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error("Invalid email or password");
    }
    //!Check if user password is valid
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      res.status(410);
      throw new Error("Invalid email or password");
    }

    //! Generate the token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "30d",
    });
    //!Send the response
    res.json({
      message: "Login success",
      token,
      id: user._id,
      email: user.email,
    });
  }),
  // ! Profile
  profile: asyncHandler(async (req, res) => {
    res.json({
      message: "Welcome to your profile",
    });
  }),
};

module.exports = usersCtrl;
