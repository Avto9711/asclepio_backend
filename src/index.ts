import express from "express";
import db from "./config/db"
const app = express();

import dotenv from "dotenv";
import  TestResponsible  from "./models/TestResponsible";

dotenv.config();
const port = process.env.PORT!


db.connect().then(async (connection) => {

    let testResponsible = new TestResponsible();
    testResponsible.description = "Test"
    testResponsible.directionId = 5
    testResponsible.labCode = 445
    testResponsible.name = "klk"

    connection.manager.save(testResponsible).then((tr)=>{
        console.log(tr.testResponsibleId);
    })
    // await res.connect()
    // res.synchronize();
    console.log("Up")
})
app.listen(port, () => {
    console.log("Runnings on %s and ", port)
})
