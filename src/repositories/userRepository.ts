import {  AbstractRepository, EntityRepository,Repository } from "typeorm";
import { User } from "../models/User";
import BaseRepository, { IBaseRepository } from "./baseRepository";


 interface IUserRepository extends IBaseRepository<User>{ }

@EntityRepository(User)
export class UserRepository extends BaseRepository<User> implements IUserRepository {

     constructor() {
         super();
     }

}