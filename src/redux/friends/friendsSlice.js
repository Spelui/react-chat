import { createSlice } from "@reduxjs/toolkit";

import ukr from "../../images/ukrainian.png";

const initialState = {
  friendsList: [
    {
      name: "Vladyslav",
      photoURL: ukr,
      id: 1,
      isActive: true,
    },
    {
      name: "Diana",
      photoURL: ukr,
      id: 2,
      isActive: false,
    },
    {
      name: "Carl",
      photoURL: ukr,
      id: 3,
      isActive: false,
    },
    {
      name: "Vit",
      photoURL: ukr,
      id: 4,
      isActive: false,
    },
    {
      name: "Viktor",
      photoURL: ukr,
      id: 5,
      isActive: false,
    },
    {
      name: "Vita",
      photoURL: ukr,
      id: 6,
      isActive: false,
    },
    {
      name: "Lik",
      photoURL: ukr,
      id: 7,
      isActive: false,
    },
    {
      name: "Like",
      photoURL: ukr,
      id: 8,
      isActive: false,
    },
    {
      name: "Masha",
      photoURL: ukr,
      id: 9,
      isActive: false,
    },
    {
      name: "Vova",
      photoURL: ukr,
      id: 10,
      isActive: false,
    },
    {
      name: "Key",
      photoURL: ukr,
      id: 11,
      isActive: false,
    },
    {
      name: "Mel",
      photoURL: ukr,
      id: 12,
      isActive: false,
    },
  ],
  filter: "",
};

const friendsSlice = createSlice({
  name: "friends",
  initialState,
  reducers: {
    changeFilter: (state, { payload }) => ({ ...state, filter: payload }),
  },
});

export const { changeFilter, addNewMessage } = friendsSlice.actions;

export default friendsSlice.reducer;
