const express = require("express");
const mongoose = require("mongoose");
const validator = require("validator");

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
      required: true,
      type: String,
      set: (value) => {
        return validator.escape(value);
      },
    },
    email: {
      required: true,
      type: String,
      validate: {
        validator: (value) => {
          return validator.isEmail(value);
        },
      },
    },
    age: {
      type: String,
      required: true,
      validate: {
        validator: (value) => {
          return validator.isInt(value, { min: 0, max: 120 });
        },
        message: "Invalid Age",
      },
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
    await User.create({
      email: "emm@gmail.com",
      username: "John_Doe<",
      age: 200,
    });
  } catch (error) {
    console.log(error);
  }
};
createUser();

//Start the server
app.listen(PORT, console.log(`Server is up and running on port ${PORT}`));
