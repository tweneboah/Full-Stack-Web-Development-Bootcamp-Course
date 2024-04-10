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

//!. Design Our Schema
const studentsSchema = new mongoose.Schema(
  {
    name: String,
    age: Number,
    score: Number,
    subjects: [String],
  },
  {
    timestamps: true,
  }
);

//!3. Create the model
//? Compiling the schema
const Student = mongoose.model("Student", studentsSchema);
//!=====CREATE OPERATION======
//! ----.save()--------
// const newUser = new User({
//   username: "masynctech",
//   age: 26,
//   birthday: new Date("2001-04-15"),
//   isActive: true,
//   hobbies: ["Soccer", "Reading", "Coding"],
//   address: {
//     street: "789 0ak St",
//     city: "Kumasi",
//     postaclCode: 5551,
//   },
//   customdata: {
//     country: "Ghana",
//   },
// });

// //! Save the doc
// newUser
//   .save()
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => console.log(error));
//! ----.create()--------
// User.create({
//   username: "emmanuel",
//   age: 26,
//   birthday: new Date("2001-04-15"),
//   isActive: true,
//   hobbies: ["Soccer", "Reading", "Coding"],
//   address: {
//     street: "789 0ak St",
//     city: "Kumasi",
//     postaclCode: 5551,
//   },
//   customdata: {
//     country: "Ghana",
//   },
// })
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));
//! ----.insertMany()--------
// User.insertMany([
//   {
//     username: "emmanuel",
//     age: 26,
//     birthday: new Date("2001-04-15"),
//     isActive: true,
//     hobbies: ["Soccer", "Reading", "Coding"],
//     address: {
//       street: "789 0ak St",
//       city: "Kumasi",
//       postaclCode: 5551,
//     },
//     customdata: {
//       country: "Ghana",
//     },
//   },
//   {
//     username: "Prince",
//     age: 28,
//     birthday: new Date("2001-08-15"),
//     isActive: true,
//     hobbies: ["Basketball", "Jogging", "Coding"],
//     address: {
//       street: "789 0ak St",
//       city: "Camp",
//       postaclCode: 5551,
//     },
//     customdata: {
//       country: "Ghana",
//     },
//   },
// ])
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));
//! ----.find()--------
// User.find()
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));
//! ----.findOne()--------
// User.findOne({
//   username: "masynctech",
// })
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));
// //! ----.findById()--------
// User.findById("652fcb47a0fc777e4baba1e5")
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));
//! ----.where()--------
// const findUsers = async () => {
//   try {
//     const users = await User.find().where("age").gte(27);
//     console.log(users);
//   } catch (error) {
//     console.log(error);
//   }
// };
// findUsers();
//! ----.sort()--------
// const findUsers = async () => {
//   try {
//     const users = await User.find().sort({ username: -1 });
//     console.log(users);
//   } catch (error) {
//     console.log(error);
//   }
// };
// findUsers();
//! ----.limit()--------
// const findUsers = async () => {
//   try {
//     const users = await User.find().limit(2);
//     console.log(users);
//   } catch (error) {
//     console.log(error);
//   }
// };
// findUsers();
//! ----.chaining()--------
// const findUsers = async () => {
//   try {
//     const users = await User.find()
//       .where("age")
//       .gte(27)
//       .sort({ username: 1 })
//       .limit(3);
//     console.log(users);
//   } catch (error) {
//     console.log(error);
//   }
// };
// findUsers();

// !----CREATE NEW USERS----
const createStudent = async () => {
  try {
    const newStudents = await Student.create([
      { name: "Alice", age: 25, email: "alice@gmaile", premiumStudent: true },
      { name: "Bob", age: 30, email: "bob@gmaile", premiumStudent: true },
      { name: "Prince", age: 22, email: "prince@gmaile", premiumStudent: true },
      {
        name: "Thomas",
        age: 29,
        email: "thomas@gmaile",
        premiumStudent: false,
      },
    ]);
    console.log(newStudents);
  } catch (error) {
    console.log(error);
  }
};
createStudent();
// !------FETCH STUDENTS-----
const findUsers1 = async () => {
  try {
    // !---$gt----
    // const students = await Student.find({
    //   age: { $gt: 25 },
    // });
    // !---where()----
    // const students = await Student.find().where("premiumStudent").equals(true);
    // console.log(students);
    // !---where()----
    // const students = await Student.find({ premiumStudent: true });
    // console.log(students);
    // !---in()----
    const students = await Student.find({ age: { $in: [40, 90] } });
    console.log(students);
  } catch (error) {
    console.log(error);
  }
};
// findUsers1();
// !------FETCH STUDENTS-----
// const findUsers = async () => {
//   try {
//     //! Exclude email, age, premiumStudent _id
//     // const students = await Student.find({}, "-age -email -premiumStudent -_id");
//     // !----using the select()----
//     const students = await Student.find().select("name -_id");
//     console.log(students);
//   } catch (error) {
//     console.log(error);
//   }
// };
// findUsers();

// !======UPDATING DOCUMENTS -----
//!-----updateOne()--------

// const updateOneFn = async () => {
//   try {
//     const updatedStudent = await Student.updateOne(
//       { name: "Prince" },
//       { email: "prince2@gmail.com", age: 30 },
//       { new: true }
//     );
//     console.log(updatedStudent);
//   } catch (error) {
//     console.log(error);
//   }
// };
// updateOneFn();
//!-----findByIdAndUpdate()--------

// const updateDoc = async () => {
//   try {
//     const updatedStudent = await Student.findByIdAndUpdate(
//       "653104c135996c1e2f75a8c6",
//       { email: "bob2@gmail.com", age: 21, name: "Bob2" },
//       { new: true }
//     );
//     console.log(updatedStudent);
//   } catch (error) {
//     console.log(error);
//   }
// };
// updateDoc();
//!-----findByIdAndUpdate()--------

// const updateDoc = async () => {
//   try {
//     const updatedStudent = await Student.updateMany(
//       { age: { $gt: 20 } },
//       { premiumStudent: false },
//       { new: true }
//     );
//     console.log(updatedStudent);
//   } catch (error) {
//     console.log(error);
//   }
// };
// updateDoc();
//!-----findBOneAndUpdate()--------

// const updateDoc = async () => {
//   try {
//     const updatedStudent = await Student.findOneAndUpdate(
//       { _id: "653104c135996c1e2f75a8c8" },
//       { premiumStudent: true, name: "Emma" },
//       { new: true }
//     );
//     console.log(updatedStudent);
//   } catch (error) {
//     console.log(error);
//   }
// };
// updateDoc();

// !======UPDATING DOCUMENTS -----
//!-----update operators()--------
const updateDoc = async () => {
  try {
    //Create the student
    // await Student.create({
    //   name: "Thomas",
    //   age: 20,
    //   subjects: ["Math"],
    //   score: 85,
    // });
    //! $set $unset
    // const student = await Student.findOneAndUpdate(
    //   { name: "Thomas" },
    //   {
    //     $set: { age: 23 },
    //     $unset: { score: 1 },
    //   },
    //   { new: true }
    // );
    // console.log(student);
    //! $addToset $Push
    //     const student = await Student.findOneAndUpdate(
    //       { name: "Thomas" },
    //       {
    //          $addToSet: { subjects: "Physics" },
    //         $push: { subjects: "Chemistry" },
    //       },
    //       { new: true }
    //     );
    //     console.log(student);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };
    // updateDoc();

    //!----$inc $mul-----
    //     const student = await Student.findOneAndUpdate(
    //       { name: "Thomas" },
    //       {
    //         // $inc: { age: -10 },
    //         $mul: { score: -2 },
    //       },
    //       { new: true }
    //     );
    //     console.log(student);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };
    // updateDoc();
    //!----$pop $pull-----
    // const student = await Student.findOneAndUpdate(
    //   { name: "Thomas" },
    //   {
    //     // $pop: { subjects: 1 },
    //     $pull: { subjects: "Math" },
    //   },
    //   { new: true }
    // );
    // console.log(student);
    //!----$min $max-----
    //     const student = await Student.findOneAndUpdate(
    //       { name: "Thomas" },
    //       {
    //         // $pop: { subjects: 1 },
    //         // $min: { age: 18 },
    //         $max: { age: 22 },
    //       },
    //       { new: true }
    //     );
    //     console.log(student);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };
    // updateDoc();
    //!----$currentDate----
    const student = await Student.findOneAndUpdate(
      { name: "Thomas" },
      {
        $currentDate: { lastModified: new Date() },
      },
      { new: true }
    );
    console.log(student);
  } catch (error) {
    console.log(error);
  }
};
// updateDoc();

// !======DELETING DOCUMENTS -----

const deleteDoc = async () => {
  try {
    //!-----findByIdAndDelete()--------
    // const result = await Student.findByIdAndDelete("6532889484f00e012a4ed8f7");
    // console.log(result);
    //!-----findOneAndDelete()--------
    // const result = await Student.findOneAndDelete({ name: "Alice" });
    // console.log(result);
    //!-----deleteMany()--------
    const result = await Student.deleteMany({ age: { $gt: 20 } });
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};
// deleteDoc();
//Start the server
app.listen(PORT, console.log(`Server is up and running on port ${PORT}`));
