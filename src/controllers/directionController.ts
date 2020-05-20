import express from "express";
import { Direction } from "../models/Direction";
import BaseController from "./baseController";
import { DirectionRepository } from "../repositories/directionRepository";

class DirectionControllers extends BaseController<DirectionRepository, Direction> {

    constructor() {
        super(DirectionRepository);
    }
}

const router = express.Router();
const controller=  new DirectionControllers();

router.get("/", controller.getAll);


export default router