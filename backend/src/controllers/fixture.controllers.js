import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import fetchData from '../utils/fetchData.js';


// Todays' match controller
const getTodaysMatch = asyncHandler(async (req, res) => {
    // 1. Fetch data from the first API
    const firstResponse = await fetchData(`https://api.football-data-api.com/todays-matches?key=${process.env.API_KEY}`);
    console.log("first response\n",firstResponse);
    if(!firstResponse){
        throw new ApiError(500,"Couldn't fetch response for today's matches")
    }
    // console.log("hello world");
    // console.log("first Response\n",firstResponse.data);
    const matchData = await firstResponse.data;

    const enrichedMatchData = await Promise.all(
        matchData.map(async (match) => {
            try {
                const competitionId = match.competitionId; // Assuming competitionId is present in each match object
                if(!competitionId) {
                    const details = [{competitionId:null}]
                    return {...match,...details}
                }
                const detailsResponse = await fetchData(`https://api.football-data-api.com/league-matches?key=${process.env.API_KEY}&season_id=${competitionId}`);
                const details = await detailsResponse.data;
                return { ...match, ...details };
            } catch (error) {
                // Handle errors gracefully, e.g., log the error or return a default value
                console.error('Error fetching details for match', match.id, error);
                return match; // Return original match object if details fetch fails
            }
        })
    );
    // Return combined data 
    return res
        .status(201)
        .json(new ApiResponse(200, enrichedMatchData, "match data successfully fetched"));
});


const getTeamDetails = asyncHandler(async(req,res)=>{
    const season_id = req.params.season_id
    const url = `https://api.football-data-api.com/league-teams?key=${process.env.API_KEY}&season_id=${season_id}&include=stats`
    const response = fetchData(url);
    if(!response){
        throw new ApiError(403,"Couldn't fetch team details")
    }

})

const getLastXstats = asyncHandler(async(req,res)=>{
    const x = req.params.x
    const team_id = req.params.team_id
    const url = `https://api.football-data-api.com/${x}?key=${process.env.API_KEY}&team_id=${team_id}`
    const response = fetchData(url)
    if(!response){
        throw new ApiError(403,"couldn't fetch last stats for team"+team_id,);
    }
    return res.status(201).
    json(new ApiResponse(201,response.data,"successfully fetched last x stats"))
})

const getMatchDetails = asyncHandler(async(req,res)=>{
    const match_id = req.params.match_id
    const url = `https://api.football-data-api.com/match?key=${process.env.API_KEY}&match_id=${match_id}`
    const response = fetchData(url);
    if(!response){
        throw new ApiError(403,"couldn't fetch match details")
    }
    return res.status(201).json(new ApiResponse(200,response.data,"Match stats"))
})






export { getTodaysMatch,getTeamDetails,getMatchDetails,getLastXstats };

