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
 console.log("data for top league is",data);

    return res
    .status(201)
    .json(new ApiResponse(200,data.data,"top countries data"));
})

export  {getTopCountries,getTopLeagues};