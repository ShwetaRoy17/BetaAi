import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import fetchData from '../utils/fetchData.js';

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
        throw new ApiError(505, "couldn't fetch data");
    }
    return res
        .status(201)
        .json(new ApiResponse(200, data.data, `League Teams for league id :${season_id}`));
})
const getLeaguePlayers = asyncHandler(async (req, res) => {
    const season_id = req.params.id;
    const url = `https://api.football-data-api.com/league-players?key=${process.env.API_KEY}`;
    const data = await fetchData(url);
    if (!data) {
        throw new ApiError(505, "couldn't fetch data");
    }
    return res
        .status(201)
        .json(new ApiResponse(200, data.data, `League players for league ${season_id}`));
})

export { getLeagueMatches, getLeagueTeams, getLeaguePlayers, getLeagueStats };

