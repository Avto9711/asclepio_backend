import {  AbstractRepository, EntityRepository,Repository } from "typeorm";
import {PersonsSick}  from "../models/PersonsSick";
import BaseRepository, { IBaseRepository } from "./baseRepository";


 interface IPersonsSickRepository extends IBaseRepository<PersonsSick>{ }

@EntityRepository(PersonsSick)
export class PersonsSickRepository extends BaseRepository<PersonsSick> implements IPersonsSickRepository {

     constructor() {
         super();
     }

}