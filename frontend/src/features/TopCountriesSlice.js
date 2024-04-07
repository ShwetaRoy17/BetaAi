import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  countries: [],
};

export const getTopCountries = createAsyncThunk(
  "topcountries",
  async () => {
    const response = await axios.get("http://localhost:8000/api/v1/home/topcountry"); // Replace with actual API endpoint
    // console.log("response:\n",response);
    return response.data.data;
  }
);

const topCountrySlice = createSlice({
  name: 'Countries',
  initialState,
  reducers: {}, // No reducers needed in this example
  extraReducers:(builder) => {
      builder
        .addCase(getTopCountries.fulfilled, (state,action) => {
      
      state.countries = action.payload.data;
        })
      
  }
});

export default topCountrySlice.reducer;

