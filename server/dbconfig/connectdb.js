import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const connectdb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            dbName: "todoapp",
        });
        console.log("Database connected successfully");
    } catch (error) {
        console.log("Something went wrong", error);
    }
}

export default connectdb;