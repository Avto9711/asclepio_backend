import { Person } from "../models/Persons";
import BaseController from "./baseController";
import { PersonRepository } from "../repositories/personRepository";


class PersonController extends BaseController<PersonRepository, Person> {
    constructor() {
            super(PersonRepository);        
    }
    
}
const controller =  new PersonController();


export default controller.router