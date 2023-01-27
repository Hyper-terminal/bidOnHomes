import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",

  initialState: {
    user: localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : null,
    authenticate: localStorage.getItem("authenticate")
      ? localStorage.getItem("authenticate")
      : null,
  },
  reducers: {
    login(state, action) {
      state.user = action.payload.user;
      state.authenticate = true;
      localStorage.setItem("user", JSON.stringify(action.payload.user));
      localStorage.setItem("authenticate", "true");
    },
    logout(state) {
      localStorage.removeItem("user");
      localStorage.removeItem("authenticate");

      state.user = null;
      state.authenticate = false;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice;
