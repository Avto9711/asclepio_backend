import express from "express";
import db from "./config/db"
import bodyParser from "body-parser"
const app = express();

import dotenv from "dotenv";
import wrapperRouter from "./routes"
dotenv.config();
const port = process.env.PORT!
const apiV = process.env.API_VERSION!

db.connect().then(async (connection) => {
    console.info("Database Up");
})

//setting routes
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

wrapperRouter(app, apiV);
app.listen(port, () => {
    console.info("Runnings on %s ", port)
})


