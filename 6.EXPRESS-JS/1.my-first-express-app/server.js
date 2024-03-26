const express = require("express");

//instance
const app = express();
//Create the PORT
const PORT = 8082;

app.get;
//Define the router handler
app.get("/", (req, res) => {
  console.log("");
  res.send("Hello world");
});
// start the server
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
