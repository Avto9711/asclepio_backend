import { getCustomRepository, AbstractRepository, ObjectType } from "typeorm";
import { Request, Response, Router } from "express";
import { IBaseRepository } from "../repositories/baseRepository";
import express from "express";

export default class BaseController<T extends AbstractRepository<T2>, T2> {
    private repo: IBaseRepository<T2>;
    public readonly router:Router;
    constructor(private modelType: ObjectType<T>) {

        this.router = express.Router();
        
        this.router.get("/", this.getAll);
        this.router.post("/", this.create);
        this.router.get("/:entityId", this.getById);
        this.router.delete("/:entityId", this.delete);
        this.router.put("/:entityId", this.update);
    }

    private getRepo() {
        this.repo = this.repo != undefined ? this.repo : getCustomRepository<IBaseRepository<T2>>(this.modelType);
    }

    protected getAll = async (req: Request, resp: Response) => {
        this.getRepo();
        var data = await this.repo.getAll();
        resp.json(data);
    }

    protected getById = async (req: Request, resp: Response) => {
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

    protected delete = async (req: Request, resp: Response) => {
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

    protected create = async (req: Request, resp: Response) => {
        this.getRepo();
        let entity  = req.body as T2;
        let data = await this.repo.addEntity(entity)
        resp.status(204).json(data);
    }

    protected update = async (req: Request, resp: Response) => {
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