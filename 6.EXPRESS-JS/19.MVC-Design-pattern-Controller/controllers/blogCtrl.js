const Post = require("../models/Post");

//!. Show Homepage
exports.showHomePage = (req, res) => {
  res.render("index");
};

//! Show the create form
exports.showCreateForm = (req, res) => {
  res.render("createPost");
};

//! To get all posts
exports.getPosts = async (req, res) => {
  const posts = await Post.find();
  res.render("list", { posts });
};

//! Create the post (The main logic)
exports.createPost = async (req, res) => {
  const { title, content, author } = req.body;
  await Post.create({
    title,
    content,
    author,
  });
  //redirect to the post list
  res.redirect("/list");
};
