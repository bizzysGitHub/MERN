const { mongoose } = require("mongoose");
var colors = require('colors');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_CONN_STRING);

        console.log(`MongoDb Connected: ${conn.connection.host}`.bgMagenta.underline);
        
    } catch (error) {
        console.log(error)
        process.exit(1);
    }
};

module.exports = connectDB