import {  AbstractRepository, EntityRepository,Repository } from "typeorm";
import { Direction } from "../models/Direction";
import BaseRepository, { IBaseRepository } from "./baseRepository";


 interface IDirectionRepository extends IBaseRepository<Direction>{ }

@EntityRepository(Direction)
export class DirectionRepository extends BaseRepository<Direction> implements IDirectionRepository {

     constructor() {
         super();
     }

}