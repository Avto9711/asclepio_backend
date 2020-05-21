import { Direction } from "../models/Direction";
import BaseController from "./baseController";
import { DirectionRepository } from "../repositories/directionRepository";

class DirectionControllers extends BaseController<DirectionRepository, Direction> {

    constructor() {
        super(DirectionRepository);
    }
}

const controller =  new DirectionControllers();


export default controller.router