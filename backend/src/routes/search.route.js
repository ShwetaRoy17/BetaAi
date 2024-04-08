import {Router} from "express"
const router = Router();

import {
    getMatch,
    getPlayer,
    getTeam,
    getPlayerName
} from '../controllers/search.controllers.js'

router.route("/team/:team_id").get(getTeam)
router.route("/player/:player_id").get(getPlayer);
router.route("/playerName/:player_id").get(getPlayerName);
router.route("/matches/:match_id").get(getMatch);


export default router