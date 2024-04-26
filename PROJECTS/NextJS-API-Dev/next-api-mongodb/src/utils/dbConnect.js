import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb://localhost:27017/next-api");
    console.log("DB connected");
  } catch (error) {
    console.log("db connecting error", error);
  }
};
export default connectDB;
