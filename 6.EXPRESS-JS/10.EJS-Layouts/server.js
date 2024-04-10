const express = require("express");
const ejsLayout = require("express-ejs-layouts");
const path = require("path");
const app = express();
const PORT = 8082;
//Serve the static files/folder
app.use(express.static(path.join(__dirname, "public")));
//Set the view engine as  ejs
app.set("view engine", "ejs");
//Plugin the ejs layout as a middleware
app.use(ejsLayout);
app.set("layout", "layout/main-layout");

//Render Home page/route
app.get("/", (req, res) => {
  res.render("home");
});

//Render About page/route
app.get("/about", (req, res) => {
  res.render("about");
});
//Render Contact page/route
app.get("/contact", (req, res) => {
  res.render("contact");
});
//Render Gallery page/route
app.get("/gallery", (req, res) => {
  res.render("gallery");
});

//404 Error handler
app.use((req, res, next) => {
  const error = new Error("Page Not Found");

  next(error);
});
app.use((err, req, res, next) => {
  console.log(err.message);
  res.render("error", { error: err.message });
});
//!Start the server
app.listen(PORT, console.log(`Server is running on port ${PORT}`));
