import { createSlice } from "@reduxjs/toolkit";
import { getJoke } from "./messageOperation";

const initialState = {
  joke: "",
  filter: "",
};

const messageSlice = createSlice({
  name: "message",
  initialState,
  reducers: {
    changeFilter: (state, { payload }) => ({ ...state, filter: payload }),
  },
  extraReducers: (builder) => {
    builder.addCase(getJoke.fulfilled, (state, { payload }) => ({
      ...state,
      joke: payload,
    }));
  },
});

export const { changeFilter } = messageSlice.actions;

export default messageSlice.reducer;
