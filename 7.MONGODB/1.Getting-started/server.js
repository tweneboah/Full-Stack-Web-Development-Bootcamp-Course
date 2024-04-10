const express = require("express");
const { MongoClient, ServerApiVersion } = require("mongodb");
const app = express();
const PORT = 8082;
//username = twentekghana
//pass = xWzu0Yn69lU7yU9K
//Connect to mongodb
const mongodbURL =
  "mongodb+srv://twentekghana:xWzu0Yn69lU7yU9K@mongodb-basics.8pldozv.mongodb.net/?retryWrites=true&w=majority";

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
  } catch (error) {
    console.log(error);
  }
};
//Run the function
connectDB();

//!Start the server
app.listen(PORT, console.log(`The server is up and running on port ${PORT}`));
