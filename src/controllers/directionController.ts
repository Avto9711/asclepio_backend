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
router.post("/", controller.create);
router.get("/:entityId", controller.getById);
router.delete("/:entityId", controller.delete);
router.put("/:entityId", controller.update);


export default router