import {Router} from "express"
import { getTodaysMatch,getMatchDetails,getLastXstats } from "../controllers/fixture.controllers.js";
import {getLeagueMatches,getLeagueTeams,getLeaguePlayers,getLeagueStats} from '../controllers/league.controllers.js'


const router = Router();

router.route("/matches").get(getTodaysMatch);
router.route("/MatchDetails/:season_id").get(getMatchDetails);
router.route("/getLastXStats/:team_id&:x").get(getLastXstats);
router.route("/leagueMatches/:season_id").get(getLeagueMatches);
router.route("/leagueTeams/:season_id").get(getLeagueTeams);
router.route("/leaguePlayers/season_id").get(getLeaguePlayers);
router.route("/leagueStats/:season_id").get(getLeagueStats);

export default router