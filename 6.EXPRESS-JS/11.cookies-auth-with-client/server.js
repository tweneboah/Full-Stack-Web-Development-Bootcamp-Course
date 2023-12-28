const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();

//!Middlewares
app.use(express.urlencoded({ extended: true }));
//!Set the view engine
app.set("view engine", "ejs");
app.use(cookieParser());

//Simulated database of users
const users = [
  { username: "john", password: "123", role: "admin" },
  { username: "Sarah", password: "456", role: "user" },
];

//Home Route
app.get("/", (req, res) => {
  res.render("home");
});
//Login Route (login form)
app.get("/login", (req, res) => {
  res.render("login");
});
//Login Route logic
app.post("/login", (req, res) => {
  //!. Find the user login details
  const userFound = users.find((user) => {
    const { username, password } = req.body;
    return user.username === username && user.password === password;
  });
  //! Create some cookies (cookie);
  //* Prepare the login user data
  //? Setting the cookie with the userdata
  res.cookie("userData", JSON.stringify(userFound), {
    maxAge: 3 * 24 * 60 * 1000, //3days expiration
    httpOnly: true,
    secure: false,
    sameSite: "strict",
  });

  //!Render the user dashboard
  if (userFound) {
    res.redirect("/dashboard");
  }
  //! Redirect the user to login page
});

//Dashboard Route
app.get("/dashboard", (req, res) => {
  //! Grab the user from the cookie
  const userData = req.cookies.userData
    ? JSON.parse(req.cookies.userData)
    : null;
  const username = userData ? userData.username : null;
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
  res.clearCookie("userData");
  //redirect
  res.redirect("/login");
});

//start the server
app.listen(3001, console.log("The server is running"));
