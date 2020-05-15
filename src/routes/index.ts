

import direction from "../controllers/direction";
import {Express} from "express";

let wrapperRouter: Function;
const prefix = "/api/v1/";
export default wrapperRouter =  (app:Express) =>{
    app.use(prefix.concat("directions"),direction)
}