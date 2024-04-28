// import 'dotenv/config'
import express,{Express, Request, Response} from "express";
import dotenv from "dotenv";
import mongoose, { ConnectOptions } from "mongoose";
import Todo from "./models/ToDos/todo";

dotenv.config();

const app : Express = express();
const port = process.env.PORT;
const AdminName=process.env.MONGO_INITDB_ROOT_USERNAME;
const Password= process.env.MONGO_INITDB_ROOT_PASSWORD;
const dataBase= process.env.MONGO_INITIAL_DATABASE;
const uri= `mongodb://${AdminName}:${Password}@mongo:27017/${dataBase}`

const getStarted = async ( ) => {
    //mongodb://bizzy:thankgod58@mongo:27017/'
    mongoose.connection.on('open', () => console.log('the port is open'));
  
    await  mongoose.connect(uri).then(() => console.log('we are connected to MongoDB'));
  
    const DoSomething = new Todo({
           title: 'do something',
           description: 'do something now',
           completed: false,
           createdAt: Date.now()
       });
       
   await DoSomething.save();

};

getStarted().catch(error => console.log(error));


app.get('/', (req: Request, res: Response) =>{res.send('Hello tunechi???')});



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })