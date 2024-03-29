import app from './app.js'
import 'dotenv/config.js'

app.listen(process.env.PORT||8000,()=>{
    console.log(`Server is listening on port ${process.env.PORT}...`);
})
