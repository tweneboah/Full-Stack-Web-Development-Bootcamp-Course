const express = require("express");
const multer = require("multer");
const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const PORT = 5000;
const app = express();
//! Configure cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
//! Configure multer storage cloudinary
const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "file-uploads",
    format: async (req, file) => "png", //convert all images to png
    public_id: (req, file) => file.fieldname + "_" + Date.now(),
    transformation: [
      {
        width: 800,
        height: 600,
        crop: "fill",
      },
    ],
  },
});

//Configure multer
const upload = multer({
  storage,
  limits: {
    fieldSize: 1024 * 1020 * 5, //5MB Limit
  },
  fileFilter: function (req, file, cb) {
    if (file.mimetype.startsWith("image/")) {
      cb(null, true);
    } else {
      cb(new Error("Not an image! Please upload only images", false));
    }
  },
});

// ! Start the server
app.listen(
  PORT,
  console.log(`Server is up and running on the port ${PORT}...`)
);
