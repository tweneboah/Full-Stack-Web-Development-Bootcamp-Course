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
//studentSchema
const studentSchema = new mongoose.Schema(
  {
    name: String,
    age: Number,
    grade: String,
  },
  {
    timestamps: true,
  }
);
//clssroomSchema
const classroomSchema = new mongoose.Schema(
  {
    className: String,
    students: [studentSchema],
  },
  {
    timestamps: true,
  }
);

//!Models
const Student = mongoose.model("Student", studentSchema);
const Classroom = mongoose.model("Classroom", classroomSchema);

// const createClassroom = async () => {
//   try {
//     //create the classroom
//     const newClassroom = await Classroom.create({
//       className: "Math 101",
//       students: [
//         { name: "Alice", age: 20, grade: "A" },
//         { name: "Bob", age: 22, grade: "B" },
//       ],
//     });
//     console.log(newClassroom);
//   } catch (error) {
//     console.log(error);
//   }
// };

// createClassroom();

// !addStudentToClassroom
const addStudentToClassroom = async () => {
  try {
    //Find the classroom and update
    const classroomUpdated = await Classroom.findByIdAndUpdate(
      "6533562edce067c10b5053d3",
      {
        $addToSet: { students: { name: "Agnes", age: 21, grade: "A" } },
      },
      { new: true }
    );
    console.log(classroomUpdated);
  } catch (error) {
    console.log(error);
  }
};
addStudentToClassroom();

//Start the server
app.listen(PORT, console.log(`Server is up and running on port ${PORT}`));
