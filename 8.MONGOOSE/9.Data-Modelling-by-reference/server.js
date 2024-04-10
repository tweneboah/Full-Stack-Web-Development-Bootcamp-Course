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
//authorSchema
const authorSchema = new mongoose.Schema(
  {
    name: String,
  },
  {
    timestamps: true,
  }
);
const Author = mongoose.model("Author", authorSchema);
//bookschema
const bookSchema = new mongoose.Schema(
  {
    title: String,
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Author", //Referencing
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

//!Models
const Book = mongoose.model("Book", bookSchema);
//!-----Create Author---
// const createAuthor = async () => {
//   try {
//     await Author.create({ name: "Masynctech" });
//   } catch (error) {
//     console.log(error);
//   }
// };
// createAuthor();
//!-----Create Author
// const createBook = async () => {
//   try {
//     await Book.create({
//       title: "MERN for everyone",
//       author: "6533a2799c7f3d749dc61c52",
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };
// createBook();
//!-----fetch books
const fetchBooks = async () => {
  try {
    const books = await Book.find().populate("author");
    console.log(books);
  } catch (error) {
    console.log(error);
  }
};
fetchBooks();
//Start the server
app.listen(PORT, console.log(`Server is up and running on port ${PORT}`));
