import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  matches: [],
  loading: false,
  error: null,
};

export const fetchAllMatches = createAsyncThunk(
  "allMatches/fetchAllMatches",
  async () => {
    const response = await axios.get(`https://api.football-data-api.com/todays-matches?key=${env.API_KEY}`); // Replace with actual API endpoint
    return response.data;
  }
);

const allMatchesSlice = createSlice({
  name: "allMatches",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllMatches.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllMatches.fulfilled, (state, action) => {
        state.loading = false;
        state.matches = action.payload;
      })
      .addCase(fetchAllMatches.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const selectAllMatches = (state) => state.allMatches.matches;
export const selectLoadingAllMatches = (state) => state.allMatches.loading;
export const selectErrorAllMatches = (state) => state.allMatches.error;

export default allMatchesSlice.reducer;