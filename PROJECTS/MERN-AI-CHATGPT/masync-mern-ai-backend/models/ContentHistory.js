const mongoose = require("mongoose");

//Schema
const historySchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    content: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

//! Compile to form the model
const ContentHistory = mongoose.model("ContentHistory", historySchema);

module.exports = ContentHistory;
