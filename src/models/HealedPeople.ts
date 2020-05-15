import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from "typeorm"
import { DiseaseTest } from "./DiseaseTest";

@Entity()
export class HealedPeople{
    @PrimaryGeneratedColumn()
    HealedPeopleId!:number;
    
    @OneToOne(type=> DiseaseTest)
    @JoinColumn()
    DiseaseTest!:DiseaseTest; // DiseaseTestId
}