import express, { Request, Response } from "express";

const getDirections = (req:Request, resp:Response)=>{
    resp.send("DirectionControllers")

}
const router = express.Router();
router.get("/", getDirections);


export default router