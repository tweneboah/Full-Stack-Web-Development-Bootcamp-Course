import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  //!Initial State
  name: "auth",
  initialState: {
    user: JSON.parse(localStorage.getItem("userInfo")) || null,
  },
  //! Reducers
  reducers: {
    // ! Login
    loginAction: (state, action) => {
      state.user = action.payload;
    },
    // ! logout
    logoutAction: (state, action) => {
      //remove user from localStorage
      localStorage.removeItem("userInfo");
      state.user = null;
    },
  },
});
//! Generate the actions
export const { loginAction, logoutAction } = authSlice.actions;
//! Generate reducers
const authReducer = authSlice.reducer;
export default authReducer;
