import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import friendsReducer from "./friends/friendsSlice";
import messageReducer from "./message/messageSlice";

const store = configureStore({
  reducer: {
    friends: friendsReducer,
    message: messageReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
  devTools: process.env.NODE_ENV === "development",
});

export { store };
