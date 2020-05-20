import { AbstractRepository } from "typeorm";

export interface IBaseRepository<T>{
    getAll():Promise<T[]>
    getById(id:number):Promise<T>
    addEntity(entity:T):Promise<T>
    updateEntity(entity:T):Promise<T>
    deleteEntity(id:number):Promise<boolean>
}

export default class BaseRepository<T> extends AbstractRepository<T> implements IBaseRepository<T>{

    async getAll():Promise<T[]>{
        let objs = await this.repository.find();
        return objs;
    }

    async getById(id:number):Promise<T>{
        let obj = await this.repository.findOne(id);
        return obj;
    }

    async addEntity(entity:T):Promise<T>{
        let obj = await this.repository.save(entity);
        return obj;
    }

    async updateEntity(entity:T):Promise<T>{
        let obj = await this.repository.save(entity);
        return obj;
    }

    async deleteEntity(id:number):Promise<boolean>{
        let result = await this.repository.delete(id);
        return result.affected > 0;
    }

}