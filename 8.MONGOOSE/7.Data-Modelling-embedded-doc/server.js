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
//addressSchema
const addressSchema = new mongoose.Schema(
  {
    street: String,
    city: String,
    state: String,
    zip: Number,
  },
  {
    timestamps: true,
  }
);
//UserSchema
const userSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    address: addressSchema, //embedded approach
  },
  {
    timestamps: true,
  }
);

//!Models
const User = mongoose.model("User", userSchema);

const createUser = async () => {
  try {
    //create the user
    const newUser = await User.create({
      name: "Emmanuel",
      email: "emma@gmail.com",
      address: {
        street: "Kumasi OT2",
        city: "Camp",
        state: "Ghana",
        zip: 1122,
      },
    });
    console.log(newUser);
  } catch (error) {
    console.log(error);
  }
};

createUser();
//Start the server
app.listen(PORT, console.log(`Server is up and running on port ${PORT}`));
