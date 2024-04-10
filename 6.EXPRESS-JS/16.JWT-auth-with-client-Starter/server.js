const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

const bcrypt = require("bcryptjs");
const app = express();

//Connect to mongoose
mongoose
  .connect("mongodb://localhost:27017/userAuthDB")
  .then(() => {
    console.log("DB has been connected");
  })
  .catch((e) => {
    console.log(e);
  });
//Create the userSchema
const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  role: {
    type: String,
    default: "user",
  },
});
//Compile the schema to form model
const User = mongoose.model("User", userSchema);

//!Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
//!Set the view engine
app.set("view engine", "ejs");

//-----CUSTOM MIDDLEWARES-----
//!--isAuthenticated (Authentication)
const isAuthenticated = (req, res, next) => {};

//!-isAdmin (Authorization)
const isAdmin = (req, res, next) => {
  if (req.userData && req.userData.role === "admin") {
    return next();
  } else {
    res.send("Fobidden: You do not have access, admin only");
  }
};

//Home Route
app.get("/", (req, res) => {
  console.log(req.session);
  res.render("home");
});
//Login Route (login form)
app.get("/login", (req, res) => {
  res.render("login");
});

//Admin Route (Admin page)
app.get("/admin-only", isAuthenticated, isAdmin, (req, res) => {
  //we have access to the login as req.userData
  // console.log(req.userData);
  res.render("admin");
});
//Register Route (register form)
app.get("/register", (req, res) => {
  res.render("register");
});

//Register Logic (register form)
app.post("/register", async (req, res) => {
  //!Destructure the req.body
  const { username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  await User.create({
    username,
    password: hashedPassword,
  });
  //Redirect to login
  res.redirect("/login");
});

//Login Route logic
app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  //!. Find the user in the db
  const userFound = await User.findOne({
    username,
  });
  if (userFound && (await bcrypt.compare(password, userFound.password))) {
    //! Generate the token
    const token = jwt.sign(
      {
        username: userFound.username,
        role: userFound.role,
      },
      "anykey",
      {
        expiresIn: "3d",
      }
    );
    //Save the token into the cookie
    res.cookie("token", token, {
      maxAge: 3 * 24 * 60 * 60 * 1000, // 3 days
      httpOnly: true,
    });
    res.redirect("/dashboard");
  } else {
    res.send("Invalid login credentials");
  }
});

//Dashboard Route
app.get("/dashboard", isAuthenticated, (req, res) => {
  //Take the login user from session

  const username = req.userData ? req.userData.username : null;
  //! Render the template
  if (username) {
    res.render("dashboard", { username });
  } else {
    //!Redirect to login
    res.redirect("/login");
  }
});

//Logout Route
app.get("/logout", (req, res) => {
  //!Logout
  res.clearCookie("token");
  //redirect
  res.redirect("/login");
});

//start the server
app.listen(3001, console.log("The server is running"));
