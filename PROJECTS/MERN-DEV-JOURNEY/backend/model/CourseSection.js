const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const courseSectionSchema = new mongoose.Schema(
  {
    sectionName: { type: String, required: true },

    sectionsCompleted: [
      {
        section: { type: Schema.Types.ObjectId, ref: "CourseSection" },
        completed: {
          type: Boolean,
          default: false,
        },
      },
    ],
    estimatedTime: Number,
    isCompleted: {
      type: Boolean,
      default: false,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

//Compile to form the model
module.exports = mongoose.model("CourseSection", courseSectionSchema);
