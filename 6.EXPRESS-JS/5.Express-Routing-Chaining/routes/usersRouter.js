const express = require("express");

//Create instnce of express router
const userRouter = express.Router();

//Using the route()
//Getting all users
userRouter.route("/").get((req, res) => {
  res.json({
    message: "All users  fetched",
  });
});
//Handle a specific user ID
userRouter
  .route("/:id")
  .get((req, res) => {
    res.json({
      message: "user  fetched",
    });
  })
  .put((req, res) => {
    res.json({
      message: "user  updated",
    });
  })
  .delete((req, res) => {
    res.json({
      message: "user  deleted",
    });
  });

module.exports = userRouter;
