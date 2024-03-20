import { createSlice } from '@reduxjs/toolkit';

const fixtureSlice = createSlice({
    name: 'fixture',
    initialState: { 
        team1:"",
        team2:"",
        date:"",
        time:"",
     },
    reducers: {
        login(state) {
            state.isLoggedIn = true
        },

    }
})

export const fixtureActions = fixtureSlice.actions;

export default fixtureSlice;