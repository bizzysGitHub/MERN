import mongoose from "mongoose";
import { Color } from "colors";
// connect to a database 

export const connectDB = async () => {
    try {
        const conn  = await mongoose.connect(process.env.MONGODB_CONN_STRING as string)

        console.log(`MongoDb Connected: ${conn.connection.host}`.bgBlue.underline);
        
    } catch (error) {
        console.log(error)
        process.exit(1);
    }
};

