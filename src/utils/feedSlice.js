import { createSlice } from "@reduxjs/toolkit";

const feedSlice = createSlice({
  name: "feed",
  initialState : [],
  reducers: {
    addFeed: (state, action) => {
      return action.payload;
    },
    removeUserFromFeed: (state, action) => {
      console.log("Current feed before removal:", state);
      console.log("Removing ID:", action.payload);

      // if (!Array.isArray(state)) {
      //   console.error("Error: state is not an array! Resetting...");
      //   return []; // Reset state to an empty array if it’s not an array
      // }

      return state.filter((user) => user._id !== action.payload); // RETURN new array
    },
  },
});

export const { addFeed, removeUserFromFeed } = feedSlice.actions;
export default feedSlice.reducer;
