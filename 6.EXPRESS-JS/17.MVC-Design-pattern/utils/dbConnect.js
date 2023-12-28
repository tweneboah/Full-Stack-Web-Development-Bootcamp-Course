const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/mvc")
  .then(() => {
    console.log("DB has been connected");
  })
  .catch((e) => {
    console.log(e);
  });
