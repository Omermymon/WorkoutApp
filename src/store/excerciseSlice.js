import { createSlice } from "@reduxjs/toolkit";

const exerciseSlice = createSlice({
  name: "exercise",
  initialState: { exercise: "" },
  reducers: {
    start: (state, action) => {
      state.exercise = action.payload;
    },
  },
});
export const { start } = exerciseSlice.actions;
export default exerciseSlice.reducer;
