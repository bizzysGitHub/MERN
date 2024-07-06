import mongoose from "mongoose";
// import colors from "colors"

export const connect = async () => {
    try {
        const conn = await mongoose.connect((process.env.MONGODB_CONN_STRING as string));
        console.log(`MongoDb Connected!!: ${conn.connection.host} `);
            

    } catch (error) {
        console.log(" Daaangg i Broke something ")
        console.log(error);
        process.exit(1);

    }
};

// export const getStarted = async ( ) => {
//     //mongodb://bizzy:thankgod58@mongo:27017/'
//     mongoose.connection.on('open', () => console.log('the port is open'));
  
//     await  mongoose.connect(uri).then(() => console.log('we are connected to MongoDB'));
  
//     const DoSomething = new Todo({
//            title: 'do something',
//            description: 'do something now',
//            completed: false,
//            createdAt: Date.now()
//        });
       
//    await DoSomething.save();

// };