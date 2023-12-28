const express = require("express");
const {
  showHomePage,
  getPosts,
  createPost,
} = require("../controllers/blogCtrl");
const postRouter = express.Router();

//!. Show Homepage
postRouter.get("/", showHomePage);

//! Show the create form
postRouter.get("/create", (req, res) => {
  res.render("createPost");
});
//! To get all posts
postRouter.get("/list", getPosts);

//! Create the post (The main logic)
postRouter.post("/create", createPost);

module.exports = postRouter;
