import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class TestResponsible{
    @PrimaryGeneratedColumn()
    testResponsibleId!:number;
    @Column()
    labCode!:number;
    @Column()
    name!:string;
    @Column()
    description!:string;
    @Column()
    directionId!:number; //directionid
}