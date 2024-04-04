import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
    currentMatch: [],
};

// Action creator for fetching match details
export const fetchMatchDetails = createAsyncThunk(
    'match',
    async () => {
        const response = await axios.get("http://localhost:8000/api/v1/main/matches"); // Replace with actual API endpoint
        // const data = await response.data;
        console.log("match data/n",response);
        return response.data;
    }
);

export const fetchAdditionalData = createAsyncThunk(
    'match/fetchAdditionalData1',
    async (matchId) => {
        const response = await fetch(/* Your first API endpoint */ + matchId);
        const data = await response.json();
        return data;
    }
);


const matchSlice = createSlice({
    name: 'match',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchMatchDetails.fulfilled, (state, action) => {
                
                state.currentMatch = action.payload.data;
            })
    },
});



export default matchSlice.reducer;