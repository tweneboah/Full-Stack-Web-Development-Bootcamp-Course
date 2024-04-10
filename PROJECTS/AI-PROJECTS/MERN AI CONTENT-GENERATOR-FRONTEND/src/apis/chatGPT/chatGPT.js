import axios from "axios";
//=======Registration=====

export const generateContentAPI = async (userPrompt) => {
  const response = await axios.post(
    "http://localhost:8090/api/v1/openai/generate-content",
    {
      prompt: userPrompt,
    },
    {
      withCredentials: true,
    }
  );
  return response?.data;
};
