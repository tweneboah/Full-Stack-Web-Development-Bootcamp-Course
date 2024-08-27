const express = require("express");
const cors = require("cors");
require("dotenv").config();
const analyzeRouter = require("./routes/analyze");
const grammarCheck = require("./routes/grammarChecker");
const spellChecker = require("./routes/spellChecker");

const app = express();
const port = 8000;

//config cors
app.use(cors());
app.use(express.json()); //for parsing application/json

//routes
app.use("/api/analyze", analyzeRouter);
app.use("/api/grammarcheck", grammarCheck);
app.use("/api/spellcheck", spellChecker);
//start server
app.listen(port, () => {
  console.log(`AI Writing app listening at http://localhost:${port}`);
});
