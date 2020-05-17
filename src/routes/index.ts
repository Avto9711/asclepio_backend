

import direction from "../controllers/direction";
import {Express} from "express";

let wrapperRouter: Function;
export default wrapperRouter =  (app:Express, apiVersion) =>{
    const prefix =  "/api/".concat(apiVersion).concat("/");
    
    app.use(prefix.concat("directions"),direction)
}