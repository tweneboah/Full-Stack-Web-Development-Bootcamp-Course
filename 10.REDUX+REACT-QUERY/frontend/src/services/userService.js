import axios from "axios";
//! Login // return a promise

export const loginAPI = async ({ email, password }) => {
  const response = await axios.post("http://localhost:8000/api/users/login", {
    email,
    password,
  });
  //return a promise
  return response.data;
};
//! Register // return a promise

export const registerAPI = async ({ email, password, username }) => {
  const response = await axios.post(
    "http://localhost:8000/api/users/register",
    {
      email,
      password,
      username,
    }
  );
  //return a promise
  return response.data;
};

//! profile // return a promise
export const profileAPI = async (token) => {
  const response = await axios.get("http://localhost:8000/api/users/profile", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  //return a promise
  return response.data;
};
