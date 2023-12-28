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
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],
  },
  {
    timestamps: true,
  }
);

//!Models
const Post = mongoose.model("Post", blogPostSchema);
//!-----Create Post---
// const createPost = async () => {
//   try {
//     const newPost = await Post.create({ title: "Awesome Fullstack course" });
//     console.log(newPost);
//   } catch (error) {
//     console.log(error);
//   }
// };
// createPost();
//!-----Create comment---
// const createComment = async () => {
//   try {
//     //!Find the post
//     const postFound = await Post.findById("6533affd2265bf3f587c4226");
//     //Create the comment
//     const newComment = await Comment.create({ text: "Awesome post2" });
//     //Pust the comment into the post
//     postFound.comments.push(newComment);
//     //! Resave the post
//     await postFound.save();
//   } catch (error) {
//     console.log(error);
//   }
// };
// createComment();
//!-----Create comment---
const fetchPosts = async () => {
  try {
    //!Find the post
    const posts = await Post.find().populate("comments");
    console.log(posts[0].comments);
  } catch (error) {
    console.log(error);
  }
};
fetchPosts();

//Start the server
app.listen(PORT, console.log(`Server is up and running on port ${PORT}`));
