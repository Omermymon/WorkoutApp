import { configureStore, createSlice } from "@reduxjs/toolkit";

// Simple user slice for login status
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

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    // add other slices here later
  },
});

export default store;
