require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const multer = require("multer");
const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const PORT = 5000;
const app = express();
//EJS template engine
app.set("view engine", "ejs");

//server the public
app.use(express.static("public"));
//Connect to mongodb
mongoose
  .connect("mongodb://localhost:27017/video-upload")
  .then(() => console.log("DB connected"))
  .catch((e) => console.log(e));

//Image schema
const videosSchema = new mongoose.Schema(
  {
    url: String,
    public_id: String,
  },
  {
    timestamps: true,
  }
);
//Model
const Video = mongoose.model("Video", videosSchema);

//Configure cloudinary
cloudinary.config({
  api_key: process.env.CLOUDINARY_API_KEY,
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
//Configure milter storage cloudinary
const storage = new CloudinaryStorage({
  cloudinary,
  params: (req, file) => {
    let folder = "video-demo";
    let resource_type = "auto";
    return {
      folder,
      resource_type,
      public_id: file.fieldname + "_" + Date.now(),
    };
  },
});

//Configure Multer
const upload = multer({
  storage,
});

//Welcome route
app.get("/", (req, res) => {
  res.render("welcome");
});

// route for displaying upload form
app.get("/upload-form", (req, res) => {
  res.render("upload");
});

//Upload route
app.post("/upload", upload.single("file"), async (req, res) => {
  console.log(req.file);
  await Video.create({
    url: req.file.path,
    public_id: req.file.filename,
  });
  //redirect
  res.redirect("/videos");
});
//get all images
app.get("/videos", async (req, res) => {
  try {
    const files = await Video.find();
    res.render("videos", { files });
  } catch (error) {
    res.json(error);
  }
});
//!Start the server
app.listen(PORT, console.log(`Server is up and running ${PORT}..`));
