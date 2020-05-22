

import direction from "../controllers/directionController";
import user from "../controllers/userController";
import {Express} from "express";
import firebaseAuth from "../middlewares/firebaseAuthMiddleware";

let wrapperRouter: Function;
export default wrapperRouter =  (app:Express, apiVersion) =>{
    const prefix =  "/api/".concat(apiVersion).concat("/");
    let directionsPath:string , usersPath:string;

     let arr = [directionsPath, usersPath] = [prefix.concat("directions"),prefix.concat("users")];

    app.use(directionsPath,firebaseAuth,direction)
    app.use(usersPath,user)
    app.use(prefix,function(req,res){
        res.json(arr)
    });
    app.use("/", function(req,res){
        res.redirect(prefix);
    })
}