import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import excerciseReducer from "./excerciseSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    excercise: excerciseReducer,
  },
});

export default store;
