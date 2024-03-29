
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  topLeagues: [],
  loading: false,
  error: null,
};

export const fetchTopLeagues = createAsyncThunk(
  "topLeagues/fetchTopLeagues",
  async () => {
    const response = await axios.get("https://your-api-endpoint/top-leagues"); // Replace with actual API endpoint
    return response.data;
  }
);

export default fetchTopLeagues.reducers;