import { AbstractRepository } from "typeorm";

export interface IBaseRepository<T>{
    getAll():Promise<T[]>
}

export default class BaseRepository<T> extends AbstractRepository<T>  implements IBaseRepository<T>{

    async getAll():Promise<T[]>{
        let objs = await this.repository.find();
        return objs;
    }

    async getById(id:number):Promise<T>{
        let obj = await this.repository.findOne(id);
        return obj;
    }

    async addEntity(entity:T):Promise<T>{
        let obj = this.repository.save(entity);
        return obj;
    }

}