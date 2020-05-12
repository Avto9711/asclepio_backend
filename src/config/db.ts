import { createConnection, Connection } from "typeorm";

let db: { connect: () => Promise<Connection> } = {connect:()=>new Promise<Connection>(()=>{}) }

db.connect = (async () => {
    console.log( process.env.DB_HOST)
    console.log( process.env.DB_PASSWORD)
    console.log( process.env.DB_USERNAME)
    console.log( process.env.DB_DATABASE)
    return await createConnection({
        type: "mssql",
        host: process.env.DB_HOST,
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        synchronize:true,
        entities:["../../dist/models/*.js"],
        logging :true
    });

})

export default db;
