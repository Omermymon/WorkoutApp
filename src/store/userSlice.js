import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: { loggedIn: false, username: null },
  reducers: {
    login: (state, action) => {
      state.loggedIn = true;
      state.username = action.payload;
    },
    logout: (state) => {
      state.loggedIn = false;
      state.username = null;
    },
  },
});
export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
