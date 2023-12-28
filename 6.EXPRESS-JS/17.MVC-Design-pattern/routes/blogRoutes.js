const express = require("express");
const mongoose = require("mongoose");
const postRouter = express.Router();

//---Post model
const postSchema = new mongoose.Schema({
  title: String,
  content: String,
  author: String,
});
const Post = mongoose.model("Post", postSchema);

//!. Show Homepage
postRouter.get("/", (req, res) => {
  res.render("index");
});
//! Show the create form
postRouter.get("/create", (req, res) => {
  res.render("createPost");
});
//! To get all posts
postRouter.get("/list", async (req, res) => {
  const posts = await Post.find();
  res.render("list", { posts });
});
//! Create the post (The main logic)
postRouter.post("/create", async (req, res) => {
  const { title, content, author } = req.body;
  await Post.create({
    title,
    content,
    author,
  });
  //redirect to the post list
  res.redirect("/list");
});

module.exports = postRouter;
