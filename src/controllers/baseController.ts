import { getCustomRepository, AbstractRepository, ObjectType } from "typeorm";
import { Request, Response } from "express";
import { IBaseRepository } from "../repositories/baseRepository";

export default class BaseController<T extends AbstractRepository<T2>, T2> {
    private repo:IBaseRepository<T2>;

    constructor(private modelType:ObjectType<T>) {

    }

    private getRepo() {
        this.repo = this.repo != undefined ? this.repo : getCustomRepository<IBaseRepository<T2>>(this.modelType);
    }
    getAll = async (req: Request, resp: Response) => {
        this.getRepo();
        var data = await this.repo.getAll();
        resp.json(data);
    }

    getById =  async(req:Request, resp:Response) =>{

    }
}