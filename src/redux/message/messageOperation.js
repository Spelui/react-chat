import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://api.chucknorris.io/jokes/random";

const joke = async () => {
  const { data } = await axios.get();
  return data;
};

const getJoke = createAsyncThunk("message/getJoke", async () => {
  try {
    const { value } = await joke();
    return value;
  } catch (e) {
    console.error(e.message);
  }
});

export { getJoke };
