import express from "express";
import db from "./config/db"
const app = express();

import dotenv from "dotenv";

dotenv.config();
const port = process.env.PORT!


db.connect().then(async (res)=>{
    // await res.connect()
    // res.synchronize();
        console.log("Up")
})
app.listen(port, () => {
    console.log("Runnings on %s and ", port)
})
