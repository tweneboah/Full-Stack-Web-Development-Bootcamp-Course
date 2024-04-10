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
// ! ----aggregate-middlewares-----
//productSchema
const productSchema = new mongoose.Schema(
  {
    name: String,
    price: Number,
    category: String,
  },
  {
    timestamps: true,
  }
);

//!---pre middleware----
productSchema.pre("aggregate", function () {
  this.pipeline().unshift({
    $match: { price: { $gt: 500 } },
  });
  console.log("Pipeline before aggregation:", this.pipeline());
});

//!---post middleware----
productSchema.post("aggregate", function (docs) {
  console.log(`Aggregated ${docs.length} documents.`);
});

const Product = mongoose.model("Product", productSchema);

//!create product
const createProduct = async () => {
  try {
    await Product.create([
      { name: "Laptop", price: 800, category: "Electronice" },
      { name: "Phone", price: 1200, category: "Electronics" },
      { name: "Shirt", price: 30, category: "Clothing" },
    ]);
  } catch (error) {
    console.log(error);
  }
};
//createProduct();

//!fetch products
const fetchProducts = async () => {
  try {
    const results = await Product.aggregate([
      {
        $group: {
          _id: "$category",
          avgPrice: { $avg: "$price" },
        },
      },
    ]);

    console.log("Aggregated Results:", results);
  } catch (error) {
    console.log(error);
  }
};
fetchProducts();

//Start the server
app.listen(PORT, console.log(`Server is up and running on port ${PORT}`));
