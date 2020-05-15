import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, OneToMany } from "typeorm";
import { User } from "./User";
import { Direction } from "./Direction";
import { DiseaseTest } from "./DiseaseTest";
import { PersonYounger } from "./PersonYounger";

@Entity()
export class Person {
    @PrimaryGeneratedColumn()
    personId!: number;
    @Column()
    identificationNumber!: number;
    @Column()

    lastName!: string;
    @Column()

    phoneNumber!: string
    @Column()

    @OneToOne(type => Direction)
    @JoinColumn()
    directionId!: number; //Fk

    @OneToOne(type => User)
    @JoinColumn()
    userId!: number;

    @OneToMany(type=> DiseaseTest, diseasteTest => diseasteTest.person)
    diseasteTests!:DiseaseTest[]

    @OneToMany(type=> PersonYounger, personYounger=> personYounger.person)
    youngers!:PersonYounger[]
}