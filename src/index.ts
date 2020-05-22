import express from "express";
import db from "./config/db"
import bodyParser from "body-parser"
const app = express();

import dotenv from "dotenv";
import wrapperRouter from "./routes"
import rfs from "rotating-file-stream"
import morgan from "morgan";
import cors from "cors"
import path from "path";
dotenv.config();
const port = process.env.PORT!
const apiV = process.env.API_VERSION!

db.connect().then(async (connection) => {
    console.info("Database Up");
})

// create a rotating write stream NOT WORKING
// var accessLogStream = rfs.createStream('access.log', {
//     interval: '1d', // rotate daily
//     path: path.join(__dirname, 'log')
//   })

//cors
app.use(cors())

  // setup the logger
app.use(morgan('dev'))

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
//setting routes

wrapperRouter(app, apiV);
app.listen(port, () => {
    console.info("Runnings on %s ", port)
})


