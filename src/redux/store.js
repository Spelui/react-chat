import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import messageReducer from "./message/messageSlice";

const store = configureStore({
  reducer: {
    message: messageReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
  devTools: process.env.NODE_ENV === "development",
});

export { store };
