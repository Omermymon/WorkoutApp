import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import excerciseReducer from "./excerciseSlice";
import workoutReducer from "./workoutSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    excercise: excerciseReducer,
    workout: workoutReducer,
  },
});

export default store;
