import { Medic } from "../models/Medic";
import BaseController from "./baseController";
import { MedicRepository } from "../repositories/medicRepository";

class MedicControllers extends BaseController<MedicRepository, Medic> {

    constructor() {
        super(MedicRepository);
    }
}

const controller =  new MedicControllers();


export default controller.router