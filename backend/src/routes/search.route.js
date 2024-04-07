import {Router} from "express"
const router = Router();

import {
    getMatch,
    getPlayer,
    getTeam
} from '../controllers/search.controllers.js'

router.route("/team/:team_id").get(getTeam)
router.route("/player/:player_id").get(getPlayer);
router.route("/matches/:match_id").get(getMatch);


export default router