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

//!. Design Our Schema
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Please username is required"],
      unique: true,
      minLength: 3,
      maxLength: 10,
    },
    email: {
      type: String,
      required: [true, "Please email is required"],
      match: /@/,
    },
    age: {
      type: Number,
      min: 18,
      max: 65,
    },
    gender: {
      type: String,
      enum: ["Male", "Female", "Other"],
    },
  },
  {
    timestamps: true,
  }
);

//! Compile the schema to create the model
const User = mongoose.model("User", userSchema);

//!Create user
const createUser = async () => {
  try {
    await User.create({});
  } catch (error) {
    console.log(error);
  }
};
createUser();

//Start the server
app.listen(PORT, console.log(`Server is up and running on port ${PORT}`));
