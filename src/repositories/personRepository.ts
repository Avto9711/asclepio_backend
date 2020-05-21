import {  EntityRepository } from "typeorm";
import {Person}  from "../models/Persons";
import BaseRepository, { IBaseRepository } from "./baseRepository";


 interface IPersonRepository extends IBaseRepository<Person>{ }

@EntityRepository(Person)
export class PersonRepository extends BaseRepository<Person> implements IPersonRepository {

     constructor() {
         super();
     }

}