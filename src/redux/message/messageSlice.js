import { createSlice } from "@reduxjs/toolkit";
import { getJoke } from "./messageOperation";

const initialState = {
  mess: [
    {
      id: 0,
      message: "Hello",
      received: false,
      createdAt: new Date(2022, 4, 25, 20, 24, 0),
    },
    {
      id: 1,
      message: "Hi",
      received: true,
      createdAt: new Date(2022, 4, 25, 20, 25, 0),
    },
    {
      id: 2,
      message: "How are you?",
      received: false,
      createdAt: new Date(2022, 4, 25, 20, 26, 0),
    },
    {
      id: 3,
      message: "I'm fine",
      received: true,
      createdAt: new Date(2022, 4, 25, 20, 27, 0),
    },
  ],
  messA: [
    {
      id: 0,
      message: "I need more time",
      received: false,
      createdAt: new Date(2022, 4, 25, 20, 24, 0),
    },
    {
      id: 1,
      message: "Hurry up we don't have time for this",
      received: true,
      createdAt: new Date(2022, 4, 25, 20, 25, 0),
    },
    {
      id: 2,
      message: "Ok, give me few minutes",
      received: false,
      createdAt: new Date(2022, 4, 25, 20, 26, 0),
    },
    {
      id: 3,
      message: "ok, I'm wait",
      received: true,
      createdAt: new Date(2022, 4, 25, 20, 27, 0),
    },
  ],
  joke: "",
};

const messageSlice = createSlice({
  name: "message",
  initialState,
  reducers: {
    addNewMessage: (state, { payload }) => ({
      ...state,
      mess: [...state.mess, payload],
    }),
    addNewMessA: (state, { payload }) => ({
      ...state,
      messA: [...state.mess, payload],
    }),
  },
  extraReducers: (builder) => {
    builder.addCase(getJoke.fulfilled, (state, { payload }) => ({
      ...state,
      joke: payload,
    }));
  },
});

export const { addNewMessage, addNewMessA } = messageSlice.actions;

export default messageSlice.reducer;
