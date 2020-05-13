import { createConnection, Connection } from "typeorm";

let db: { connect: () => Promise<Connection> } = {connect:()=>new Promise<Connection>(()=>{}) }
//https://github.com/mysqljs/mysql/issues/1507#issuecomment-385224467
//https://www.percona.com/blog/2019/11/19/installing-mysql-with-docker/
db.connect = (async () => {
    console.log( process.env.DB_HOST)
    console.log( process.env.DB_PASSWORD)
    console.log( process.env.DB_USERNAME)
    console.log( process.env.DB_DATABASE)
    return await createConnection({
        type: "mysql",
        host: process.env.DB_HOST,
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        synchronize:true,
        entities:["./dist/models/*.js"],
        logging :true,
    });

})

export default db;
