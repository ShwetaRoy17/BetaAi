import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  countries: [],
  loading: false,
  error: null,
};

export const fetchCountries = createAsyncThunk(
  "countries/fetchCountries",
  async () => {
    const response = await axios.get("https://your-api-endpoint/countries"); // Replace with actual API endpoint
    return response.data;
  }
);

export default fetchCountries.reducer;