require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const usersRouter = require("./routes/usersRouter");
const errorHandler = require("./middlewares/errorHandlerMiddleware");
const courseRouter = require("./routes/courseRouter");
const courseSectionRouter = require("./routes/courseSection");
const app = express();
const PORT = process.env.PORT || 5000;
//connect to mongodb

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB Connected"))
  .catch((e) => console.log(e));
//middlewares
app.use(express.json());
//!-----Routes-----
app.use("/", usersRouter);
app.use("/", courseRouter);
app.use("/", courseSectionRouter);

//! Error hadler middleware
app.use(errorHandler);
//!Not found route
app.use("*", (req, res) => {
  res.status(404).json({ error: "Route Not Found" });
});
//Start the server
app.listen(PORT, console.log(`Server is running on the port ${PORT}... `));
