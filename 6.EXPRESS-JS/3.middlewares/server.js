const express = require("express");
const app = express();
const PORT = 8082;

//?----BUILT-IN-MIDDLEWARES----
//serve static files
// app.use(express.static())
//!pass incoming data
// app.use(express.json());
// app.use(express.urlencoded())

//?----APP-LEVEL-MIDDLEWARES----
//Logging details of every request
// const logRequest = (req, res, next) => {
//   console.log(
//     `Request received at: ${new Date().toISOString()} for ${req.method} to ${
//       req.path
//     }`
//   );
//   //call next
//   next();
// };
// app.use(logRequest);

// // Home Route
// app.get("/", (req, res) => {
//   console.log(req.body);
//   res.json({
//     message: "Welcome to this app",
//   });
// });
// // Create a book
// app.post("/books", (req, res) => {
//   console.log(req.body);
//   res.json({
//     message: "Built in middlewares demo",
//   });
// });

// !----ROUTER LEVEL MIDDLEWARE---
// app.use("/users", (req, res, next) => {
//   console.log("Middleware specific to paths with /users executed");
//   next();
// });
// //* Home route
// app.get("/", (req, res) => {
//   res.json({
//     message: "Welcome to router level middleware",
//   });
// });
// //Profile route
// app.get("/profile", (req, res) => {
//   res.json({
//     message: "This is a profile route",
//   });
// });
// //Settings route
// app.get("/settings", (req, res) => {
//   res.json({
//     message: "This is a profile route",
//   });
// });
// //get all users route
// app.get("/users", (req, res) => {
//   res.json({
//     message: "Get all users route",
//   });
// });
// //Register users route
// app.post("/users/register", (req, res) => {
//   res.json({
//     message: "Get all users route",
//   });
// });
// //Login users route
// app.post("/users/login", (req, res) => {
//   res.json({
//     message: "Login Route",
//   });
// });

// !----ERROR-HANDLING MIDDLEWARE---
app.get("/cause-error", (req, res, next) => {
  const error = new Error("Login failed");
  next(error);
});

//error handling middleware
app.use((error, req, res, next) => {
  console.log(error);
  res.json({
    status: "error",
    message: error.message,
  });
});

//start the server
app.listen(PORT, console.log(`Server is running on port ${PORT}`));
