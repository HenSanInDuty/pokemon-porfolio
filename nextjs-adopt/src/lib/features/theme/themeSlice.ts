import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isDarkMode: false,
};

export const themeSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    switchMode: (state) => {
      state.isDarkMode = !state.isDarkMode;
    },
    setDarkMode: (state) => {
      state.isDarkMode = true;
    },
    setLightMode: (state) => {
      state.isDarkMode = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { switchMode, setDarkMode, 
    setLightMode } = themeSlice.actions;

export default themeSlice.reducer; // EXPORT Slice reducer
