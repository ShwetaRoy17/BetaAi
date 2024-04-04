import app from './app.js'
import  'dotenv/config'
import connectDB from './db/index.js';

connectDB()
.then(()=>{
app.listen(process.env.PORT||8000,()=>{
        console.log(`Server is listening on port ${process.env.PORT}...`);
    })
})
.catch((err)=>{
    console.log("Mongo DB connnection failed ,\n Error",err);
})
