import mongoose from 'mongoose';

const connectDB = async()=>{
    try {
        const connecionInstance = await mongoose.connect(`${process.env.CONNECTION_URL}`,
        {
            useNewUrlParser:true,
            useUnifiedTopology:true,
        });
        console.log(`Mongodb connected !!! \n`,connecionInstance);

    } catch (error) {
        console.log("Mongodb Connection Error : ",error);
        process.exit(1)
    }
}

export default connectDB;