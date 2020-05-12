import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class HealedPeople{
    @PrimaryGeneratedColumn()
    HealedPeopleId!:number;
    @Column()
    DiseaseTestId!:number; // DiseaseTestId
}