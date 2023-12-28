const express = require("express");
const postRouter = require("./routes/blogRoutes");
require("./utils/dbConnect"); //Db Connect
const app = express();

const PORT = 3000;
//!Configure ejs
app.set("view engine", "ejs");
//!Middlewares
app.use(express.urlencoded({ extended: true }));

//App routes
app.use("/", postRouter);

//Start the server
app.listen(PORT, console.log(`The server is running on port ${PORT}`));
