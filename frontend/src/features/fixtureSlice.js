import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  topMatches: {},
};

const topMatchesSlice = createSlice({
  name: "topMatches",
  initialState,
  reducers: {
    setTopMatch(state, action) {
      // Assuming allMatches state is accessible from the Redux store
      const allMatches = useSelector((state) => state.allMatches.matches); // Access all matches state
      if (allMatches.length > 0) {
        state.topMatches = [allMatches[0]]; // Set top match as first element of all matches
      } else {
        state.topMatches = []; // Set empty top matches if no matches available
      }
    },
  },
});

export const { setTopMatch } = topMatchesSlice.actions;

export default topMatchesSlice.reducer;