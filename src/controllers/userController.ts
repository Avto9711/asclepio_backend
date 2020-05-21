import { User } from "../models/User";
import BaseController from "./baseController";
import { UserRepository } from "../repositories/userRepository";

class UserControllers extends BaseController<UserRepository, User> {

    constructor() {
        super(UserRepository);
    }
}

const controller =  new UserControllers();


export default controller.router