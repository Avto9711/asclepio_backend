import express from "express";
import db from "./config/db"
const app = express();

import dotenv from "dotenv";
import wrapperRouter from "./routes"
dotenv.config();
const port = process.env.PORT!


db.connect().then(async (connection) => {
    console.info("Database Up")
})
//setting routes
wrapperRouter(app);

app.listen(port, () => {
    console.info("Runnings on %s and ", port)
})
