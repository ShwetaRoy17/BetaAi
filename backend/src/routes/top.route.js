import {Router} from "express"
import {getTopCountries,getTopLeagues,getPlayerdetails,getTeamdetails} from '../controllers/top.controller.js'
const router = Router();

router.route("/topcountry").get(getTopCountries)
router.route("/topleague").get(getTopLeagues);
router.route("/player/:id").get(getPlayerdetails);
router.route("/team/:id").get(getTeamdetails)

export default router