import {asyncHandler} from '../utils/asyncHandler.js'
import {ApiError} from '../utils/ApiError.js'
import {ApiResponse} from '../utils/ApiResponse.js'
import fetchData from '../utils/fetchData.js';


const getTopCountries = asyncHandler(async(req,res)=>{
    const url = `https://api.football-data-api.com/country-list?key=${process.env.API_KEY}`;
    const data = await fetchData(url);
    if(!data){
        throw new ApiError(505,"couldn't fetch data");
    }
    return res
    .status(201)
    .json(new ApiResponse(200,data.data,"top countries data"));
})

const getTopLeagues = asyncHandler(async(req,res)=>{
    const url = `https://api.football-data-api.com/league-list?key=${process.env.API_KEY}`;
    const data = await fetchData(url
    );

    if(!data){
        throw new ApiError(505,"couldn't fetch data");
        
    }
//  console.log("data for top league is",data);

    return res
    .status(201)
    .json(new ApiResponse(200,data.data,"top countries data"));
})


// player details 
const getPlayerdetails = asyncHandler(async(req,res)=>{
    const id = req.params.id;
    const url = `https://api.football-data-api.com/player-stats?key=${process.env.API_KEY}&player_id=${id}`
    const data = await fetchData(url);
    if(!data) {
        throw new ApiError(500,"Players detail got something wrong");

    }

    return res.status(200)
    .json(new ApiResponse(201,data,"players detail"))
})




// team details
const getTeamdetails = asyncHandler(async(req,res)=>{
    const id = req.params.id;
    console.log("id:",id);
    const url = `https://api.football-data-api.com/team?key=dcf0fc31fba7156ec14dcb521dbfa5ef3099b17ed993a03e11d70c65c24ab30a&team_id=${id}`
    console.log("url:",url);
    const data = await fetchData(url);
    if(!data) {
        throw new ApiError(500,"team details got something wrong");

    }

    return res.status(200)
    .json(new ApiResponse(201,data,"team details"))
})

export  {getTopCountries,getTopLeagues,getPlayerdetails,getTeamdetails};