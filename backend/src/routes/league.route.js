import {Router} from "express"

const router = Router();


import {
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
    getLeagueTables
} from '../controllers/league.controllers.js'

router.route("/topcountry").get(getTopCountries)
router.route("/topleague").get(getTopLeagues);
router.route("/matches").get(getTodaysMatch);
router.route("/getLastXStats/:id").get(getLastXstats);
router.route("/MatchDetails/:season_id").get(getMatchDetails);
router.route("/leagueMatches/:season_id").get(getLeagueMatches);
router.route("/leagueTeams/:season_id").get(getLeagueTeams);
router.route("/leaguePlayers/:season_id").get(getLeaguePlayers);
router.route("/leagueStats/:season_id").get(getLeagueStats);
router.route("/leaguedetails/:season_id").get(getLeagueDetails);
router.route("/leaguetables/:season_id").get(getLeagueTables);


export default router