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
// ! ----Query-middleware-----
//productSchema
const productSchema = new mongoose.Schema(
  {
    name: String,
    price: Number,
    inStock: Boolean,
  },
  {
    timestamps: true,
  }
);

//!---find middleware----
productSchema.pre("find", function (next) {
  this.where({ inStock: true, price: { $gt: 100000 } });
  next();
});
//!---update middleware----
productSchema.pre("updateOne", function (next) {
  const update = this.getUpdate();
  if (update.price && update.price < 0) {
    throw new Error("Price must be positive number");
  }
  next();
});

const Product = mongoose.model("Product", productSchema);

//!create product
const createProduct = async () => {
  try {
    await Product.create([
      { name: "Laptop", price: 1000, inStock: true },
      { name: "Phone", price: 500, inStock: true },
      { name: "Headphones", price: 80, inStock: false },
    ]);
  } catch (error) {
    console.log(error);
  }
};
//createProduct();

//!fetch products
const fetchProducts = async () => {
  try {
    const results = await Product.find();
    console.log(results);
  } catch (error) {
    console.log(error);
  }
};
//fetchProducts();
//!update product
const updateProduct = async () => {
  try {
    const results = await Product.updateOne(
      {
        _id: "6538f395f0cbd3eebaabe2e9",
      },
      {
        price: -2,
      }
    );
    console.log(results);
  } catch (error) {
    console.log(error);
  }
};
updateProduct();
//Start the server
app.listen(PORT, console.log(`Server is up and running on port ${PORT}`));
