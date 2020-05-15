import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm"
import { TestResult } from "./enums/TestResult";
import { Person } from "./Persons";
import TestResponsible from "./TestResponsible";

@Entity()
export class DiseaseTest {
    
    @PrimaryGeneratedColumn()
    diseaseTestId!: number;

    @Column()
    testDateTime!: Date;

    @ManyToOne(type => TestResponsible, testRespo=> testRespo.diseaseTests)
    testResponsible!: TestResponsible;

    @Column("enum",{enum:TestResult})
    testResult!: TestResult;

    @Column()
    resultDateTime!: Date;

    @Column()
    testComments!: string;

    @ManyToOne(type => Person, person=> person.diseasteTests)
    person!: Person; //personid
}

