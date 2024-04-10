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
// ! ----Aggregation-----
//ordersSchema
const ordersSchema = new mongoose.Schema(
  {
    customerID: String,
    amount: Number,
    date: Date,
  },
  {
    timestamps: true,
  }
);
const Order = mongoose.model("Order", ordersSchema);

//!Create orders
const createOrders = async () => {
  try {
    //create orders
    const ordersCreated = await Order.create([
      {
        customerID: "1",
        amount: 600,
        date: new Date("2024-01-01"),
      },

      // {
      //   customerID: "2",
      //   amount: 200,
      //   date: new Date("2024-01-10"),
      // },
      // {
      //   customerID: "3",
      //   amount: 150,
      //   date: new Date("2024-01-20"),
      // },
      // {
      //   customerID: "4",
      //   amount: 150,
      //   date: new Date("2024-01-30"),
      // },
    ]);
    console.log(ordersCreated);
  } catch (error) {
    console.log(error);
  }
};
//createOrders();

//Perform aggregation/statistics
const aggregateData = async () => {
  try {
    //Create the pipeline
    const pipeline = [
      {
        $match: {
          date: { $gte: new Date("2024-01-01"), $lt: new Date("2024-01-31") },
        },
      },
      // stage 2: Grouping
      {
        $group: {
          _id: "$customerID",
          totalAmount: {
            $sum: "$amount",
          },
          averageOrder: {
            $avg: "$amount",
          },
          minOrder: {
            $min: "$amount",
          },
          maxOrder: {
            $max: "$amount",
          },
          count: {
            $sum: "$amount",
          },
        },
      },
      {
        $sort: { totalAmount: 1 },
      },
      {
        $limit: 3,
      },
    ];
    //Execute aggregation
    const result = await Order.aggregate(pipeline);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};
aggregateData();

//Start the server
app.listen(PORT, console.log(`Server is up and running on port ${PORT}`));
