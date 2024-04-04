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
import toprouter from "./routes/top.route.js";
import fixturerouter from "./routes/fixture.route.js";
import userRouter from "./routes/user.route.js";


// router declaration
app.use('/api/v1/main',fixturerouter) //fixture routes
app.use('/api/v1/home',toprouter); // country and league routes
// app.use('/api/v1/user',userRouter); // user routes

export default app