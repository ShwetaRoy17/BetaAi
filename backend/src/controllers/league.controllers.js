import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import fetchData from '../utils/fetchData.js';



// TODAYS MATCH CONTROLLER
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


// GET ALL MATCHES
const getAllMatches = asyncHandler(async (req, res) => {
    const url = `https://api.football-data-api.com/league-list?key=${process.env.API_KEY}`



    const res1 = await fetchData(url);
    // console.log("data ",res1);
    const data = res1.data;
    if (!data) {
        throw new ApiError(500, "couldn't fetche league names")
    }

    // console.log("query",req.query.limit,req.query.page)
    const limit = Number(req.query.limit) || 10; // limit
    const page = Number(req.query.page) || 1;  // page number
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;



    const data1 = data.slice(startIndex, endIndex);
    const leagueArray = []
    // Get current date and date 2 days ago in Unix timestamp format




    const currentDateUnix = Math.floor(Date.now() / 1000);
    const twoDaysAgoUnix = currentDateUnix - (2 * 24 * 60 * 60);

    for (const league of data1) {
        const leagueObj = {
            name: league.name,
            league_name: league.league_name,
            country: league.country,
            image: league.image,

        }
        const matches = []
        const endsea = league.season[league.season.length - 1];
        leagueObj.id = endsea.id;
        const url2 = `https://api.football-data-api.com/league-matches?key=${process.env.API_KEY}&season_id=${endsea.id}`

        const res2 = await fetchData(url2)

        const matchData = res2.data;
        // console.log("matchesData",res2.data);
        if (!res2) {
            throw new ApiError(404, "couldn't get match data");
        }
        const currentDate = new Date();
        const twoDaysFromNow = new Date(currentDate);
        twoDaysFromNow.setDate(currentDate.getDate() - 2);

        const futureMatch = matchData.filter(match => match.date_unix >= twoDaysAgoUnix);
        // console.log("future Match",futureMatch);
        // return res.status(200).json(new ApiResponse(201,futureMatch,'match data fetche successfully'));

        futureMatch.forEach(match => {
            if (match) {

                const matchObj = {
                    id: match.id,
                    home_image: match.home_image,
                    home_name: match.home_name,
                    away_name: match.away_name,
                    away_image: match.away_image,
                    odds_ft_1: match.odds_ft_1,
                    odds_ft_x: match.odds_ft_x,
                    odds_ft_2: match.odds_ft_2,
                    home_image: match.homeimg,
                    home_image: match.homeimg,
                    date_unix:match.date_unix,
                    stadium_name:match.stadium_name,
                    game_week :match.game_week
                }
                matches.push(matchObj);
            }
        }
        )
        // console.log("matches ",futureMatch);

        leagueObj.matches = matches;
        // console.log("leagOBJ",leagueObj);
        leagueArray.push(leagueObj);
    }
    // console.log("leagye array",leagueArray);

    return res.status(200).json(new ApiResponse(200, leagueArray, "sended league array"))

}
)


// TOP COUNTRIES
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


// TOP LEAGUES
const getTopLeagues = asyncHandler(async (req, res) => {
    const url = `https://api.football-data-api.com/league-list?key=${process.env.API_KEY}`;
    const data = await fetchData(url
    );

    if (!data) {
        throw new ApiError(505, "couldn't fetch data");

    }
    return res
        .status(201)
        .json(new ApiResponse(200, data.data, "top countries data"));
})



// GET LEAGUE STATS
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


// GET LEAGUE MATCHES
const getLeagueMatches = asyncHandler(async (req, res) => {
    // https://api.football-data-api.com/league-matches?key=YOURKEY&season_id=1
    const season_id = req.params.season_id
    const url = `https://api.football-data-api.com/league-matches?key=${process.env.API_KEY}&season_id=${season_id}`;
    const data = await fetchData(url);
    if (!data) {
        throw new ApiError(505, "couldn't fetch data");
    }
    return res
        .status(201)
        .json(new ApiResponse(200, data.data, `League Matches for league id ${season_id}`));
})


// GET LEAGUE TEAMS
const getLeagueTeams = asyncHandler(async (req, res) => {
    const season_id = req.params.season_id
    const url = `https://api.football-data-api.com/league-teams?key=${process.env.API_KEY}&season_id=${season_id}`;
    console.log("url is ", url);
    const data = await fetchData(url);
    if (!data) {
        throw new ApiError(505, "couldn't fetch data for leag");
    }
    return res
        .status(201)
        .json(new ApiResponse(200, data.data, `League Teams for league id :${season_id}`));
})


// GET LEAGUE PLAYERS
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


// GET MATCH DETAILS
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



// unix To Time
function unixToTime(unixTimestamp) {
    // Convert Unix timestamp to milliseconds
    const milliseconds = unixTimestamp * 1000;

    // Create a new Date object
    const dateObject = new Date(milliseconds);

    // Extract hours, minutes, and seconds
    const hours = dateObject.getHours();
    const minutes = dateObject.getMinutes();
    const seconds = dateObject.getSeconds();

    // Format the time
    const formattedTime = hours * 10000 + minutes * 100 + seconds;

    return formattedTime;
}


function isWithin1_5HoursBeforeCurrent(unixTimestamp) {
    const currentTime = Date.now();

    // 2. Convert Unix timestamp to milliseconds
    const timestampInMilliseconds = unixTimestamp * 1000;
  
    // 3. Calculate the time difference in milliseconds (1.5 hours in milliseconds)
    const timeDifference = 1.5 * 60 * 60 * 1000; // 1.5 hours * minutes/hour * seconds/minute * milliseconds/second
  
    // 4. Check if the timestamp is within the desired range
    return (currentTime - timeDifference) <= timestampInMilliseconds && timestampInMilliseconds <= currentTime;
  
}


// filter live match function
function filterLiveMatches(data) {
    const currentUnixTime = unixToTime(Date.now() / 1000); // Current UNIX timestamp
    // console.log(Date.now())
    // 1712827800
    const filteredMatches = data.filter(match => isWithin1_5HoursBeforeCurrent(match.date_unix));

    // Extracting only important fields from the filtered matches
    const importantFields = filteredMatches.map(match => ({

        id: match.id,
        stadium_name: match.stadium_name,
        country: match.match_url.split('/')[1],
        home_name: match.home_name,
        away_name: match.away_name,
        home_image: match.home_image,
        away_image: match.away_image,
        date_unix: match.date_unix,
        homeGoalCount: match.homeGoalCount,
        awayGoalCount: match.awayGoalCount,
        odds_ft_1: match.odds_ft_1,
        odds_ft_2: match.odds_ft_1,
        odds_ft_x: match.odds_ft_1,
        competition_id: match.competition_id,
        status: match.status
        // Add more fields as needed
    }));

    return importantFields;

}

// GET LIVE MATCHES
const getLiveMatches = asyncHandler(async (req, res) => {
    
    const firstResponse = await fetchData(`https://api.football-data-api.com/todays-matches?key=${process.env.API_KEY}`);
    console.log("first response\n", firstResponse);
    if (!firstResponse) {
        throw new ApiError(500, "Couldn't fetch response for today's matches")
    }
    const matchData = firstResponse.data;
    const resData = filterLiveMatches(matchData);


    return res
        .status(201)
        .json(new ApiResponse(200, firstResponse.data, "live match data successfully fetched"));

})



// last x stats for match
const getLastXstats = asyncHandler(async (req, res) => {


    const id = req.params.id
    const url = `https://api.football-data-api.com/lastx?key=${process.env.API_KEY}&team_id=${id}`

    const data = await fetchData(url);
    if (!data) {
        throw new ApiError(505, "couldn't fetch data for team")
    }

    res.status(201).json(new ApiResponse(200, { "image": data.data[0]?.image, "lastx": data.data[0]?.["stats"]?.["additional_info"]?.["formRun_overall"] }, "successful x"))
})



// LEAGUE DETAILS
const getLeagueDetails = asyncHandler(async (req, res) => {
    const season_id = req.params.season_id
    const url = `https://api.football-data-api.com/league-season?key=${process.env.API_KEY}&season_id=${season_id}`;
    const data = await fetchData(url);
    if (!data) {
        throw new ApiError(505, "couldn't fetch data for ");
    }
    // console.log("the data is",data.data);
    return res.status(201).
        json(new ApiResponse(201, { name: data.data.name, country: data.data.country, image: data.data.image }, "successfully fetched league names ,data and image"))
})



// get league tables
const getLeagueTables = asyncHandler(async (req, res) => {
    // https://api.football-data-api.com/league-tables?key=YOURKEY&season_id=X

    const season_id = req.params.season_id
    const url = `https://api.football-data-api.com/league-tables?key=${process.env.API_KEY}&season_id=${season_id}`
    const response = await fetchData(url)
    if (!response) {
        throw new ApiError(403, "couldn't fetch last stats for team" + team_id,);
    }
    return res.status(201).
        json(new ApiResponse(201, response.data, "successfully league tables"))
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
    getLeagueDetails,
    getLeagueTables,
    getLiveMatches,
    getAllMatches
};

