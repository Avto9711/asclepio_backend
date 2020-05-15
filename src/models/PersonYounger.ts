import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm"
import { Person } from "./Persons";

@Entity()
export class PersonYounger{
    @PrimaryGeneratedColumn()
    personYoungerId!:number;
    @Column()
    childrenName!:string;
    @Column()

    childrenLastName!:string;
    @Column()

    age!:number;

    @ManyToOne(type=> Person, person=> person.youngers)
    person!:Person
}