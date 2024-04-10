const express = require("express");
const {
  MongoClient,
  ServerApiVersion,
  ObjectId,
  Decimal128,
} = require("mongodb");
const app = express();
const PORT = 8082;
//Connect to mongodb
// const mongodbURL =
//   "mongodb+srv://twentekghana:xWzu0Yn69lU7yU9K@mongodb-basics.8pldozv.mongodb.net/?retryWrites=true&w=majority";
const mongodbURL = "mongodb://localhost:27017";

const client = new MongoClient(mongodbURL, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

const connectDB = async () => {
  try {
    await client.connect();
    console.log("MongoDB Connected successfully");
    //1.Create your db (school)
    const database = client.db("masynctech");
    //2.Collections
    const students = database.collection("students");
    const books = database.collection("books");
    //!----CREATE----
    //! Create document (any student) - insertOne

    // const result = await students.insertOne({
    //   name: "Agnes",
    //   age: 20,
    //   subjects: ["Math", "Physics"],
    // });
    // console.log(result);
    //! Using insertMany
    // const results = await students.insertMany([
    //   {
    //     name: "John",
    //     age: 26,
    //     grade: "B",
    //     pass: false,
    //     subjects: ["Chemistry", "Biology"],
    //   },
    //   {
    //     name: "Joseph",
    //     grade: "B",
    //     pass: false,
    //     age: 30,
    //     subjects: ["Chemistry1", "Biology1"],
    //   },
    //   {
    //     name: "Prince",
    //     grade: "C",
    //     pass: true,
    //     age: 30,
    //     subjects: ["Chemistry1", "Biology1"],
    //   },
    // ]);
    // console.log(results);
    //!----READ OPERATIONS----
    //! Find()
    // const resultsCursor = students.find();
    // const results = await resultsCursor.toArray();
    // console.log(results);
    //!----READ OPERATIONS----
    //! FindOne()
    // const result = await students.findOne({
    //   age: 20,
    // });
    // console.log(result);
    //!----UPDATE OPERATIONS----
    //! updateOne()
    // const result = await students.updateOne(
    //   { name: "Agnes" },
    //   { $set: { name: "Alice" } }
    // );
    // console.log(result);

    //! updateMany()
    // const result = await students.updateMany(
    //   { grade: "B" },
    //   { $set: { pass: true } }
    // );

    //! findOneAndUpdate()
    // const result = await students.findOneAndUpdate(
    //   { name: "Emmanuel" },
    //   { $set: { name: "Emmanuel2" } }
    // );
    // console.log(result);

    //!----DELETE OPERATIONS----
    //! deleteOne()
    // const result = await students.deleteOne({
    //   name: "Emmanuel2",
    // });
    // console.log(result);
    //! deleteMany()
    // const result = await students.deleteMany({
    //   grade: "B",
    // });
    // console.log(result);
    //! findOneAndDelete()
    // const result = await students.findOneAndDelete({
    //   name: "Prince",
    // });
    // console.log(result);

    //!----BULK WRITE OPERATIONS----
    //! insert
    //! Update
    //! Delete
    // const bulkWriteOperations = [
    //   // Creation stage
    //   {
    //     insertOne: {
    //       document: {
    //         name: "John",
    //         age: 20,
    //         grade: "A",
    //       },
    //     },
    //   },
    //   // update stage
    //   {
    //     updateOne: {
    //       filter: { name: "John" },
    //       update: { $set: { grade: "B" } },
    //     },
    //   },
    //   // delete stage
    //   {
    //     deleteOne: {
    //       filter: { name: "John" },
    //     },
    //   },
    // ];
    // const result = await students.bulkWrite(bulkWriteOperations);
    // console.log(result);
    //!----DATA TYPES OPERATIONS----
    const result = await books.insertOne({
      _id: new ObjectId(), //object
      title: "To Kill a Mockingbird", //string
      author: {
        firstname: "Harper", //Embeded //string'
        lastname: "Lee",
      },
      isAvailable: true, //Boolean
      price: Decimal128.fromString("10.99"), //Decimal 128
      tags: ["Classic", "Literature"], //Array
      ratings: [4.5, 4.0, 5.0], //Array of doubles
      publisher: {
        name: "JB Lippicott",
        founded: "1982",
        isActive: true, // Boolean
      },
    });
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};
//Run the function
connectDB();

//!Start the server
app.listen(PORT, console.log(`The server is up and running on port ${PORT}`));
