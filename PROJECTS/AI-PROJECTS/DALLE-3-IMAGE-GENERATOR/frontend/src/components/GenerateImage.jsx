import React, { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import "./GenerateImage.css";
import Images from "./Images";

// Function to call the backend API
const generateImageAPI = async (prompt) => {
  const res = await axios.post("http://localhost:9000/generate-image", {
    prompt,
  });
  return res.data; // Return the data directly for easier access
};

const GenerateImage = () => {
  const [prompt, setPrompt] = useState("");

  const mutation = useMutation({
    mutationFn: generateImageAPI,
    mutationKey: ["generate-image"],
  });

  const handleGenerateImage = () => {
    if (!prompt) {
      alert("Please enter a prompt.");
      return;
    }
    mutation.mutate(prompt);
  };
  console.log(mutation?.data);
  return (
    <>
      <div className="header">
        <h1 className="title">AI Image Generator using Dalle 3 from OpenAI</h1>
        <p className="description">
          Enter a prompt in the input field below to generate a unique image
          using AI.
        </p>
        <p>{mutation.isError && mutation.error.message}</p>
      </div>
      <div className="container">
        <input
          type="text"
          placeholder="Enter prompt"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          className="input-prompt"
        />
        <button
          onClick={handleGenerateImage}
          disabled={mutation.isLoading}
          className="generate-btn"
        >
          {mutation.isPending ? "Generating..." : "Generate Image"}
        </button>
        {mutation.isSuccess && (
          <div className="image-container">
            <img src={mutation.data.url} alt="Generated" />
          </div>
        )}
      </div>
      {/* <Images /> */}
    </>
  );
};

export default GenerateImage;
