const asyncHandler = require("express-async-handler");
const User = require("../models/User");
const Post = require("../models/Post");

//Get user profile
exports.getProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id)
    .select("-password")
    .populate("posts")
    .populate("comments");
  // check if user exists
  if (!user) {
    return res.render("profile", {
      title: "Profile",
      user: req.user,
      error: "User not found",
    });
  }

  //fetch user's posts
  const posts = await Post.find({ author: req.user._id });
  console.log(user);
  res.render("profile", {
    title: "Profile",
    user: user,
    posts,
    postCount: posts.length,
  });
});
