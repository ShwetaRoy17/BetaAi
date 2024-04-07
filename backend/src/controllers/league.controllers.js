import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import fetchData from '../utils/fetchData.js';

// Todays' match controller
const getTodaysMatch = asyncHandler(async (req, res) => {
    const firstResponse = await fetchData(`https://api.football-data-api.com/todays-matches?key=${process.env.API_KEY}`);
    // console.log("first response\n", firstResponse);
    if (!firstResponse) {
        throw new ApiError(500, "Couldn't fetch response for today's matches")
    }
    const matchData = await firstResponse.data;

    return res
        .status(201)
        .json(new ApiResponse(200, matchData, "match data successfully fetched"));
});

const getTopCountries = asyncHandler(async (req, res) => {
    const url = `https://api.football-data-api.com/country-list?key=${process.env.API_KEY}`;
    const data = await fetchData(url);
    if (!data) {
        throw new ApiError(505, "couldn't fetch data");
    }
    return res
        .status(201)
        .json(new ApiResponse(200, data.data, "top countries data"));
})

const getTopLeagues = asyncHandler(async (req, res) => {
    const url = `https://api.football-data-api.com/league-list?key=${process.env.API_KEY}`;
    const data = await fetchData(url
    );

    if (!data) {
        throw new ApiError(505, "couldn't fetch data");

    }
    //  console.log("data for top league is",data);

    return res
        .status(201)
        .json(new ApiResponse(200, data.data, "top countries data"));
})


const getLeagueStats = asyncHandler(async (req, res) => {
    const season_id = req.params.season_id
    const url = `https://api.football-data-api.com/league-season?key=${process.env.API_KEY}&season_id=${season_id}`;
    const data = await fetchData(url);
    if (!data) {
        throw new ApiError(505, "couldn't fetch data for ");
    }
    return res
        .status(201)
        .json(new ApiResponse(200, data.data, `League stats for league with season id:${season_id}`));
})

const getLeagueMatches = asyncHandler(async (req, res) => {
    // https://api.football-data-api.com/league-matches?key=YOURKEY&season_id=1
    const season_id = req.params.season_id
    const url = `https://api.football-data-api.com/league-matches?key=${process.env.API_KEY}&season_id=${season_id}`; const data = await fetchData(url);
    if (!data) {
        throw new ApiError(505, "couldn't fetch data");
    }
    return res
        .status(201)
        .json(new ApiResponse(200, data.data, `League Matches for league id ${season_id}`));
})

const getLeagueTeams = asyncHandler(async (req, res) => {
    const season_id = req.params.season_id
    const url = `https://api.football-data-api.com/league-team?key=${process.env.API_KEY}&season_id=${season_id}`;
    const data = await fetchData(url);
    if (!data) {
        throw new ApiError(505, "couldn't fetch data for leag");
    }
    return res
        .status(201)
        .json(new ApiResponse(200, data.data, `League Teams for league id :${season_id}`));
})
const getLeaguePlayers = asyncHandler(async (req, res) => {
    const season_id = req.params.season_id;
    const url = `https://api.football-data-api.com/league-players?key=${process.env.API_KEY}&season_id=${season_id}`;
    const data = await fetchData(url);
    if (!data) {
        throw new ApiError(505, "couldn't fetch data");
    }
    return res
        .status(201)
        .json(new ApiResponse(200, data.data, `League players for league ${season_id}`));
})

const getMatchDetails = asyncHandler(async (req, res) => {
    const season_id = req.params.season_id
    // console.log("match id:", season_id);
    const url = `https://api.football-data-api.com/match?key=${process.env.API_KEY}&match_id=${season_id}`
    // console.log("url", url);
    const response = await fetchData(url);
    console.log("response :\n", response);
    if (!response) {
        throw new ApiError(403, "couldn't fetch match details")
    }
    return res.status(201).json(new ApiResponse(200, response.data, "Match stats"))
})

const getLastXstats = asyncHandler(async (req, res) => {
    const x = req.params.x
    const team_id = req.params.team_id
    const url = `https://api.football-data-api.com/${x}?key=${process.env.API_KEY}&team_id=${team_id}`
    const response = fetchData(url)
    if (!response) {
        throw new ApiError(403, "couldn't fetch last stats for team" + team_id,);
    }
    return res.status(201).
        json(new ApiResponse(201, response.data, "successfully fetched last x stats"))
})
const getLeagueDetails = asyncHandler(async (req, res) => {
    const season_id = req.params.season_id
    const url = `https://api.football-data-api.com/league-season?key=${process.env.API_KEY}&season_id=${season_id}`;
    const data = await fetchData(url);
    if (!data) {
        throw new ApiError(505, "couldn't fetch data for ");
    }
    // console.log("the data is",data.data);
    return res.status(201).
        json(new ApiResponse(201, {name:data.data.name,country:data.data.country,image:data.data.image}, "successfully fetched league names ,data and image"))
})

export {
    getTopCountries,
    getTopLeagues,
    getTodaysMatch,
    getLastXstats,
    getMatchDetails,
    getLeagueMatches,
    getLeagueTeams,
    getLeaguePlayers,
    getLeagueStats,
    getLeagueDetails
};

