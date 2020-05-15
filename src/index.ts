import express from "express";
import db from "./config/db"
const app = express();

import dotenv from "dotenv";
import  TestResponsible  from "./models/TestResponsible";

dotenv.config();
const port = process.env.PORT!


db.connect().then(async (connection) => {
    console.log("Database Up")
})
app.listen(port, () => {
    console.log("Runnings on %s and ", port)
})
