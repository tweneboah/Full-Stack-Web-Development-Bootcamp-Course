import dotenv from "dotenv";
dotenv.config();
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { config, uploader } from "cloudinary";
import OpenAI from "openai";
//
const app = express();
const PORT = 9000;

//!Connect to mongodb
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Monodb connected");
  })
  .catch((e) => console.log(e));

//!---Gallery model-----
const gallerySchema = new mongoose.Schema(
  {
    prompt: String,
    url: String,
    public_id: String,
  },
  {
    timestamps: true,
  }
);
const Gallery = mongoose.model("Gallery", gallerySchema);
//!Configure openai
const openai = new OpenAI({
  apiKey: "",
});
//!Configure cloudinary
config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});
//! Cors
const corsOptions = {
  origin: ["http://localhost:5174", "http://localhost:5173"],
};

//!Middlewares
app.use(express.json());
app.use(cors(corsOptions));

//!Route
app.post("/generate-image", async (req, res) => {
  const { prompt } = req.body;
  try {
    const imageResponse = await openai.images.generate({
      model: "dall-e-3",
      prompt,
      n: 1,
      size: "1024x1024",
    });
    //Save the image into cloudinary
    const image = await uploader.upload(imageResponse.data[0].url, {
      folder: "ai-art-work",
    });
    //Save into mongodb
    const imageCreated = await Gallery.create({
      prompt: imageResponse.data[0].revised_prompt,
      url: imageResponse.data[0].url,
      public_id: image.public_id,
    });
    res.json(imageCreated);
  } catch (error) {
    console.log(error);
    res.json({ message: "Error generating image" });
  }
});

//!List images route
app.get("/images", async (req, res) => {
  try {
    const images = await Gallery.find();
    res.json(images);
  } catch (error) {
    res.json({ message: "Error fetching images" });
  }
});
//!Start the server
app.listen(PORT, console.log("Server is running..."));
