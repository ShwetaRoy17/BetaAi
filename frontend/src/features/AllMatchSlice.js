import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  FeaturedMatch: [],
  isLoading:true,
};



const AllmatchesSlice = createSlice({
  name: 'matches',
  initialState,
  reducers: {
    setMatches(state,action){
      state.FeaturedMatch = action.payload
      state.isLoading=false
    },
  },
  
});

export const {setMatches} =AllmatchesSlice.actions;
export default AllmatchesSlice.reducer