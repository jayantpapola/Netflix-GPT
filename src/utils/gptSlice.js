import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    gptView: false,
  },
  reducers: {
    toggleGptSearchView: (state) => {
      state.gptView = !state.gptView;
    },
  },
});

export const { toggleGptSearchView } = gptSlice.actions;
export default gptSlice.reducer;
