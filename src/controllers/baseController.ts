import { getCustomRepository, AbstractRepository, ObjectType } from "typeorm";
import { Request, Response } from "express";
import { IBaseRepository } from "../repositories/baseRepository";

export default class BaseController<T extends AbstractRepository<T2>, T2> {
    private repo: IBaseRepository<T2>;

    constructor(private modelType: ObjectType<T>) {

    }

    private getRepo() {
        this.repo = this.repo != undefined ? this.repo : getCustomRepository<IBaseRepository<T2>>(this.modelType);
    }

    getAll = async (req: Request, resp: Response) => {
        this.getRepo();
        var data = await this.repo.getAll();
        resp.json(data);
    }

    getById = async (req: Request, resp: Response) => {
        this.getRepo();
        let { entityId } = req.params;

        let ent = await this.repo.getById(parseInt(entityId));

        if (ent == null) {
            resp.status(404).send()
        }
        else {
            let data = await this.repo.getById(parseInt(entityId))
            resp.json(data);
        }
    }

    delete = async (req: Request, resp: Response) => {
        this.getRepo();
        let { entityId } = req.params;
        let ent = await this.repo.getById(parseInt(entityId));

        if (ent == null) {
            resp.status(404).send()
        } else {

            let sucesss = await this.repo.deleteEntity(parseInt(entityId));

            if (sucesss)
                resp.status(204).send();
            else
                resp.status(400).send();

        }
    }

    create = async (req: Request, resp: Response) => {
        this.getRepo();
        let entity  = req.body as T2;
        let data = await this.repo.addEntity(entity)
        resp.status(204).json(data);
    }

    update = async (req: Request, resp: Response) => {
        this.getRepo();
        let entity  = req.body as T2;

        let { entityId } = req.params;

        let ent = await this.repo.getById(parseInt(entityId));

        if (ent == null) {
            resp.status(404).send()
        } else {
            let data = await this.repo.updateEntity(entity)
            resp.json(data);
        }
    }
}