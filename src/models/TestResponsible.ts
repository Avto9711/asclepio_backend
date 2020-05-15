import { Entity, PrimaryGeneratedColumn, Column, OneToMany, OneToOne, JoinColumn } from "typeorm"
import { DiseaseTest } from "./DiseaseTest";
import { Direction } from "./Direction";

@Entity()
export default class TestResponsible{
    @PrimaryGeneratedColumn()
    testResponsibleId!:number;
    @Column()
    labCode!:number;
    @Column()
    name!:string;
    @Column()
    description!:string;

    @OneToOne(type => Direction)
    @JoinColumn()
    direction!:Direction; //directionid

    @OneToMany(type=> DiseaseTest, diseaseTest=> diseaseTest.testResponsible)
    diseaseTests!:DiseaseTest[]
}