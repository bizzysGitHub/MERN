// import 'dotenv/config'
import express, { Express } from "express";
import dotenv from "dotenv";
import errorHandler from './middlewares/errorHandler'
import { connect } from "./config/config";
import todoRoutes from "./routes/todoRoutes";

const port = process.env.PORT;

dotenv.config();


connect();
const app: Express = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/todos', todoRoutes);

app.use(errorHandler);

app.get('/', (req: any, res: any) => { res.send('Hello tunechi???') });

app.listen(port, () => console.log(`Example app listening on port 1116`));




