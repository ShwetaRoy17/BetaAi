JavaScript
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchTerm: '',
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    searchAction: (state, action) => {
      state.searchTerm = action.payload;
    },
  },
});

export const { searchAction } = searchSlice.actions;
export default searchSlice.reducer;