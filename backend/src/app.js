import express from "express"
import cors from "cors";
import cookieParser from "cookie-parser";


const app = express();


// middleware
app.use(cors({
    Origin:process.env.CORS_ORIGIN,
    credentials:true
}))

app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended:true,limit:"16kb"}))
app.use(express.static("public"))
app.use(cookieParser())



// import routers from
import leagueRouter from "./routes/league.route.js";
import searchRouter from "./routes/search.route.js";
// import userRouter from "./routes/user.route.js";


// router declaration
app.use('/api/v1/search',searchRouter) //search routes
app.use('/api/v1/leagues',leagueRouter); // leagues and realted routes
// app.use('/api/v1/user',userRouter); // user and its activity routes

export default app