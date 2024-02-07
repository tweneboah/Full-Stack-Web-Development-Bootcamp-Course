const express = require("express");
const mongoose = require("mongoose");
const postRouter = require("./router/postRouter");
const app = express();

//-----Connect DB------

mongoose
  .connect("mongodb://localhost:27017/mvc-design-pattern")
  .then(() => {
    console.log("DB has been connected");
  })
  .catch((e) => {
    console.log(e);
  });

const PORT = 3000;
//!Configure ejs
app.set("view engine", "ejs");
//!Middlewares
app.use(express.urlencoded({ extended: true }));

//!. Show Homepage
app.get("/", (req, res) => {
  res.render("index");
});

//!---Router----
app.use("/", postRouter);

//Start the server
app.listen(PORT, console.log(`The server is running on port ${PORT}`));
