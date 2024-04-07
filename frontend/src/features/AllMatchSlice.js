import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  matches: [],
};

export const fetchMatches = createAsyncThunk(
    "allMatches",
    async () => {
      const response = await axios.get("http://localhost:8000/api/v1/leagues/matches"); 
      console.log("response got all:\n",response);
      return response.data.data;
    }
  );

const AllmatchesSlice = createSlice({
  name: 'matches',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMatches.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchMatches.fulfilled, (state, action) => {
        state.matches = action.payload.data;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchMatches.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});


export default AllmatchesSlice.reducer