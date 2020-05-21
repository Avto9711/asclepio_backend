import {  EntityRepository } from "typeorm";
import {MedicsPersonsSick}  from "../models/MedicsPersonsSick";
import BaseRepository, { IBaseRepository } from "./baseRepository";


 interface IMedicsPersonsSickRepository extends IBaseRepository<MedicsPersonsSick>{ }

@EntityRepository(MedicsPersonsSick)
export class MedicsPersonsSickRepository extends BaseRepository<MedicsPersonsSick> implements IMedicsPersonsSickRepository {

     constructor() {
         super();
     }

}