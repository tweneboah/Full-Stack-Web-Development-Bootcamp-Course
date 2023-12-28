const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = 8082;

// const mongodbURL =
//   "mongodb+srv://twentekghana:xWzu0Yn69lU7yU9K@mongodb-basics.8pldozv.mongodb.net/?retryWrites=true&w=majority";
const mongodbURL = "mongodb://localhost:27017/masynctech";

//! 1. Connect to mongodb using mongoose
const connectToDB = async () => {
  try {
    await mongoose.connect(mongodbURL);
    console.log("Mongodb has been connected successfully");
  } catch (error) {
    console.log(`Error connecting to mongodb ${error}`);
  }
};
connectToDB();
// ! ----one-many relationship-----
//commentSchema
const commentSchema = new mongoose.Schema(
  {
    text: String,
    postId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post",
    },
  },
  {
    timestamps: true,
  }
);
const Comment = mongoose.model("Comment", commentSchema);
//blogPostSchema
const blogPostSchema = new mongoose.Schema(
  {
    title: String,
  },
  {
    timestamps: true,
  }
);

//!Models
const Post = mongoose.model("Post", blogPostSchema);
//!-----Create Post---
const createPost = async () => {
  try {
    const newPost = await Post.create({ title: "Awesome Fullstack course" });
    console.log(newPost);
  } catch (error) {
    console.log(error);
  }
};
//createPost();
//!-----Create comment---
const createComment = async () => {
  try {
    //Create the comment
    const newComment = await Comment.create({
      text: "Awesome post 2",
      postId: "6533b3acca3ab8685234c0dd",
    });
    console.log(newComment);
  } catch (error) {
    console.log(error);
  }
};
//createComment();
//!-----Create comment---
const fetchComments = async () => {
  try {
    //!Find the post
    const comments = await Comment.find().populate("postId");
    console.log(comments);
  } catch (error) {
    console.log(error);
  }
};
fetchComments();

//Start the server
app.listen(PORT, console.log(`Server is up and running on port ${PORT}`));
