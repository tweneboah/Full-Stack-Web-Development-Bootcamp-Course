const asyncHandler = require("express-async-handler");
const axios = require("axios");
const ContentHistory = require("../models/ContentHistory");
const User = require("../models/User");

//----OpenAI Controller----

const openAIController = asyncHandler(async (req, res) => {
  const { prompt } = req.body;
  console.log(prompt);
  try {
    const response = await axios.post(
      "https://api.openai.com/v1/completions",
      {
        model: "gpt-3.5-turbo-instruct",
        prompt,
        max_tokens: 600,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    //send the response

    const content = response?.data?.choices[0].text?.trim();
    console.log(content);
    //Create the history
    const newContent = await ContentHistory.create({
      user: req?.user?._id,
      content,
    });
    //Push the content into the user
    const userFound = await User.findById(req?.user?.id);
    userFound.contentHistory.push(newContent?._id);
    //Update the api Request count
    userFound.apiRequestCount += 1;
    await userFound.save();
    res.status(200).json(content);
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = {
  openAIController,
};
