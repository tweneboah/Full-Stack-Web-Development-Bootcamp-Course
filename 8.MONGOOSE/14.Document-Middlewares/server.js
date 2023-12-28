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
// ! ----Document-middleware-----
//userSchema
const userSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    password: String,
    dateUpdated: Date,
  },
  {
    timestamps: true,
  }
);
//!Validate middleware
userSchema.pre("validate", function (next) {
  if (this.email && this.email.includes("@")) {
    next();
  } else {
    throw new Error("Invalid email, must include@ symbol");
  }
});
//!updateOne middleware
userSchema.pre("updateOne", function (next) {
  this.set({ dateUpdated: new Date("2024-2-2") });
  next();
});
//!init middleware
userSchema.pre("init", function (doc) {
  console.log("Documents has been loaded ", doc);
});
const User = mongoose.model("User", userSchema);

//!create the user
const createUser = async () => {
  try {
    const newUser = await User.create({
      name: "Thomas",
      email: "thoma@gmail.com",
      password: 1234,
    });
  } catch (error) {
    console.log(error);
  }
};
//createUser();
//!update the user
const updateUser = async () => {
  try {
    const newUser = await User.updateOne(
      { name: "Thomas" },
      {
        email: "thomas2@gmail.com",
      }
    );
  } catch (error) {
    console.log(error);
  }
};
// updateUser();
//!update the user
const fetchUsers = async () => {
  try {
    await User.find();
  } catch (error) {
    console.log(error);
  }
};
fetchUsers();
//Start the server
app.listen(PORT, console.log(`Server is up and running on port ${PORT}`));
