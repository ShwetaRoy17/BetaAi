import {Router} from "express"

const router = Router();

router.route("/fixture").get(()=>{
    return ("fixture")
})

export default router