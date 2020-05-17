import {  AbstractRepository, EntityRepository,Repository } from "typeorm";
import { Direction } from "../models/Direction";
import { IBaseRepository } from "./BaseRepository";


interface IDirectionRepository extends IBaseRepository<Direction>{ }

@EntityRepository(Direction)
export class DirectionRepository extends AbstractRepository<Direction> implements IDirectionRepository {

     constructor() {
         super();
     }
     async getAll():Promise<Direction[]>{
        let dir = await this.repository.find();
        return dir;
    }
    

}