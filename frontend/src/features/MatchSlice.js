import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    matchData: null,
    isLoading: false,
    error: null,
};

export const fetchMatchData = createAsyncThunk(
    "match/fetchMatchData",
    async (matchId) => {
        // console.log("matchId",matchId);
      // Replace this with your actual API call
      const response = await axios.get(`http://localhost:8000/api/v1/leagues/MatchDetails/${matchId}`);
      console.log("the response is ",response.data);
      return response.data;
    }
  );

  const matchSlice = createSlice({
    name: "match",
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
      builder
        .addCase(fetchMatchData.pending, (state) => {
          state.isLoading = true;
          state.error = null;
        })
        .addCase(fetchMatchData.fulfilled, (state, action) => {
          state.matchData = action.payload.data;
          state.isLoading = false;
        })
        .addCase(fetchMatchData.rejected, (state, action) => {
          state.isLoading = false;
          state.error = action.error.message;
        });
    },
  });
  

  export default matchSlice.reducer;