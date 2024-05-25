import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config({
    path: "./.env"
})

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`mongodb+srv://mongo_manas:Mongo2605@mongomanas.cuavvuq.mongodb.net/?retryWrites=true&w=majority&appName=mongomanas`)
        console.log(`\n MongoDB connected !! DB Host: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("MongoDB connection Error", error);
        process.exit(1);
    }
}



export default connectDB;