import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    matchData: null,
    isLoading: false,
    error: null,
    seasonId:null,
    homeId:null,
    awayId:null,
    homeName:"",
    awayName:"",
    stadium_name:"",
    game_week:0
// homeImg:"",
// AwayImg:"",
// homename:"",
// awayname:"",
};

export const fetchMatchData = createAsyncThunk(
    "match/fetchMatchData",
    async (matchId) => {
        // console.log("matchId",matchId);
      // Replace this with your actual API call
      const response = await axios.get(`${import.meta.env.VITE_HOST}/api/v1/leagues/MatchDetails/${matchId}`);
      // console.log("the response is ",response.data);
      return response.data;
    }
  );

  const matchSlice = createSlice({
    name: "match",
    initialState,
    reducers: {
      addDetails(state,action){
        state.stadium_name = action.payload.stadium_name
        state.game_week = action.payload.game_week
      }
    },
    extraReducers: (builder) => {
      builder
        .addCase(fetchMatchData.pending, (state) => {
          state.isLoading = true;
          state.error = null;
        })
        .addCase(fetchMatchData.fulfilled, (state, action) => {
          state.matchData = action.payload.data;
          state.homeId = state.matchData.homeID
          state.awayId = state.matchData.awayID,
          // state.homeImg= `https://cdn.footystats.org/img/${state.matchData.home_image}`
          // state.AwayImg= `https://cdn.footystats.org/img/${state.matchData.away_image}`
          state.homeName= state.matchData.home_name
          state.awayName= state.matchData.away_name
          state.seasonId= state.matchData.competition_id
          
          state.isLoading = false;
          


        })
        .addCase(fetchMatchData.rejected, (state, action) => {
          state.isLoading = false;
          state.error = action.error.message;
        });
    },
  });
  
export const {addDetails} = matchSlice.actions
  export default matchSlice.reducer;