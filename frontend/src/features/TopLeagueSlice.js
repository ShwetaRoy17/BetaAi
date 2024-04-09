import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  leagues: [],
};

export const getTopLeagues = createAsyncThunk(
  "topLeagues/fetchTopLeagues",
  async () => {
    const response = await axios.get(`${import.meta.env.VITE_HOST}/api/v1/home/topleague`); // Replace with actual API endpoint
    // console.log("response:\n",response);
    return response.data;
  }
);

const topLeagueSlice = createSlice({
  name: 'topLeague',
  initialState,
  reducers: {}, // No reducers needed in this example
  extraReducers:(builder) => {
      builder
        .addCase(getTopLeagues.fulfilled, (state,action) => {
      
      state.leagues = action.payload.data;
        })
      
  }
});

export default topLeagueSlice.reducer;

// (builder) => {
//   builder
//     .addCase(getTopLeagues.pending, (state) => {
//       state.loading = true;
//       state.error = null;
//     })
//     .addCase(getTopLeagues.fulfilled, (state, action) => {
//       state.loading = false;
//       console.log(action.payload);
//       state.topLeagues = action.payload;
//     })
//     .addCase(getTopLeagues.rejected, (state, action) => {
//       state.loading = false;
//       state.error = action.error.message;
//     });
// },