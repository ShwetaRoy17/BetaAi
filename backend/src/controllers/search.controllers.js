import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import fetchData from '../utils/fetchData.js';



const getTeam = asyncHandler(async(req,res)=>{
    const id = req.params.team_id
    const url = `https://api.football-data-api.com/team?key=${process.env.API_KEY}&team_id=${id}&include=stats`;
    const data = await fetchData(url);
    if(!data){
        throw new ApiError(403,"couldn't fetch data for the give team");
    }
return res.status(200).json(new ApiResponse(200,data.data,"Successfully fetched data for searched team"))
})

const getPlayer = asyncHandler(async(req,res)=>{
    const id = req.params.player_id
    const url = `https://api.football-data-api.com/player-stats?key=${process.env.API_KEY}&player_id=${id}`;
    const data = await fetchData(url);
    if(!data){
        throw new ApiError(403,"couldn't fetch data for the give team");
    }
return res.status(200).json(new ApiResponse(200,data.data,"Successfully fetched data for searched team"))
})

const getMatch = asyncHandler(async(req,res)=>{
    const id = req.params.match_id
    const url = `https://api.football-data-api.com/match?key=${process.env.API_KEY}&match_id=${id}`;
    const data = await fetchData(url);
    if(!data){
        throw new ApiError(403,"couldn't fetch data for the give team");
    }
return res.status(200).json(new ApiResponse(200,data.data,"Successfully fetched data for searched team"))
})

const getPlayerName = asyncHandler(async(req,res)=>{
    const id = req.params.player_id
    const url = `https://api.football-data-api.com/player-stats?key=${process.env.API_KEY}&player_id=${id}`;
    const data = await fetchData(url);
    if(!data){
        throw new ApiError(403,"couldn't fetch data for the give team");
    }
    const {full_name} = data.data[0];
return res.status(200).json(new ApiResponse(200,{full_name},"Successfully fetched data for searched team"))
})


export {
    getMatch,
    getPlayer,
    getTeam,
    getPlayerName
}









