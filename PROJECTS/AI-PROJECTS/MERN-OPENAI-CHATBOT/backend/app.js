import OpenAI from "openai";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config(); // Load environment variables from .env file

const app = express();
const port = process.env.PORT || 5000;

// CORS options for allowing requests from specific origins
const corsOptions = {
  origin: ["http://localhost:5173", "http://127.0.0.1:5173"],
  credentials: true, // Important for cookies
};

app.use(cors(corsOptions));
app.use(express.json()); // Parse JSON bodies

// Initialize OpenAI with API key from environment variables
const openai = new OpenAI({
  apiKey: "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", // Use environment variable for API key
});

// Global variable to hold the conversation history
let conversationHistory = [
  { role: "system", content: "You are a helpful assistant." },
];

app.post("/ask", async (req, res) => {
  const userMessage = req.body.message;

  // Update conversation history with the user's message
  conversationHistory.push({ role: "user", content: userMessage });

  try {
    // Request a completion from OpenAI based on the updated conversation history
    const completion = await openai.chat.completions.create({
      messages: conversationHistory,
      model: "gpt-3.5-turbo",
    });

    // Extract the response
    const botResponse = completion.choices[0].message.content;

    // Update conversation history with the assistant's response
    conversationHistory.push({ role: "assistant", content: botResponse });

    // Send the assistant's response back to the client
    res.json({ message: botResponse });
  } catch (error) {
    console.error("Error calling OpenAI: ", error);
    res.status(500).send("Error generating response from OpenAI");
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
