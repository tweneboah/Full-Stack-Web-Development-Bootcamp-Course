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
const userProfileSchema = new mongoose.Schema({
  username: String, //string
  age: Number, //number
  birthday: Date, //Date
  isActive: Boolean, //Boolean
  hobbies: [String], //Boolean
  objectID: mongoose.Schema.Types.ObjectId, //ObjectID
  address: {
    street: String,
    city: String,
    postaclCode: Number,
  }, //Embeded Document
  customdata: mongoose.Schema.Types.Mixed, //Mixed
});

//!3. Create the model
//? Compiling the schema
const User = mongoose.model("User", userProfileSchema); //users

//Start the server
app.listen(PORT, console.log(`Server is up and running on port ${PORT}`));
