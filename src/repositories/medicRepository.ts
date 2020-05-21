import {  AbstractRepository, EntityRepository,Repository } from "typeorm";
import { Medic } from "../models/Medic";
import BaseRepository, { IBaseRepository } from "./baseRepository";


 interface IMedicRepository extends IBaseRepository<Medic>{ }

@EntityRepository(Medic)
export class MedicRepository extends BaseRepository<Medic> implements IMedicRepository {

     constructor() {
         super();
     }

}