import {Router} from "express"
import {getTopCountries,getTopLeagues} from '../controllers/top.controller.js'
const router = Router();

router.route("/topcountry").get(getTopCountries)
router.route("/topleague").get(getTopLeagues);

export default router