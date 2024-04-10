const express = require("express");

//Create instnce of express router
const userRouter = express.Router();
//!.Getting all users
userRouter.get("/", (req, res) => {
  res.json({
    message: "All users  fetched",
  });
});
//!.Getting a user
userRouter.get("/:id", (req, res) => {
  res.json({
    message: "user  fetched",
  });
});

//! Update user
userRouter.put("/:id", (req, res) => {
  res.json({
    message: "user  updated",
  });
});

//! Delete
userRouter.delete("/:id", (req, res) => {
  res.json({
    message: "user  deleted",
  });
});
module.exports = userRouter;
