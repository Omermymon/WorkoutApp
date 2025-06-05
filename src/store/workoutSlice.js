import { createSlice } from "@reduxjs/toolkit";

const workoutSlice = createSlice({
  name: "workout",
  initialState: {
    exercises: [],
    workoutDate: null,
  },
  reducers: {
    addExercise: (state, action) => {
      state.exercises.push(action.payload); // payload: { exercise, sets, reps, weight }
    },
    setWorkoutDate: (state, action) => {
      state.workoutDate = action.payload;
    },
    resetWorkout: (state) => {
      state.exercises = [];
      state.workoutDate = null;
    },
  },
});

export const { addExercise, setWorkoutDate, resetWorkout } =
  workoutSlice.actions;
export default workoutSlice.reducer;
