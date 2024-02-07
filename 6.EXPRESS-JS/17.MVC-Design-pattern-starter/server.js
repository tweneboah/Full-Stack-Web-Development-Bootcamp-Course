const express = require("express");

const app = express();
//-----Connect DB------
const mongoose = require("mongoose");
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

//---Post model
const postSchema = new mongoose.Schema({
  title: String,
  content: String,
  author: String,
});
const Post = mongoose.model("Post", postSchema);

//!. Show Homepage
app.get("/", (req, res) => {
  res.render("index");
});
//! Show the create form
app.get("/create", (req, res) => {
  res.render("createPost");
});
//! To get all posts
app.get("/list", async (req, res) => {
  const posts = await Post.find();
  res.render("list", { posts });
});
//! Create the post (The main logic)
app.post("/create", async (req, res) => {
  const { title, content, author } = req.body;
  await Post.create({
    title,
    content,
    author,
  });
  //redirect to the post list
  res.redirect("/list");
});
//Start the server
app.listen(PORT, console.log(`The server is running on port ${PORT}`));
