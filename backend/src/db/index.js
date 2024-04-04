import mongoose from 'mongoose';

const connectDB = async()=>{
    try {
        const connecionInstance = await mongoose.connect("mongodb+srv://royshweta:shweta23@cluster0.w94xdio.mongodb.net/BETAI?retryWrites=true&w=majority",
        {
            useNewUrlParser:true,
            useUnifiedTopology:true,
        });
        console.log(`Mongodb connected !!! \n`);

    } catch (error) {
        console.log("Mongodb Connection Error : ",error);
        process.exit(1)
    }
}

export default connectDB;