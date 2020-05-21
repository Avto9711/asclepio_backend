import {  AbstractRepository, EntityRepository,Repository } from "typeorm";
import TestResponsible  from "../models/TestResponsible";
import BaseRepository, { IBaseRepository } from "./baseRepository";


 interface ITestResponsibleRepository extends IBaseRepository<TestResponsible>{ }

@EntityRepository(TestResponsible)
export class TestResponsibleRepository extends BaseRepository<TestResponsible> implements ITestResponsibleRepository {

     constructor() {
         super();
     }

}