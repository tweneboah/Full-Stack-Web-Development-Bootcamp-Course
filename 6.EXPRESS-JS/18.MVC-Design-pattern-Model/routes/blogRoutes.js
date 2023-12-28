const express = require("express");
const Post = require("../models/Post");
const postRouter = express.Router();

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
