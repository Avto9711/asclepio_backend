import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

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
    @Column()
    directionId!:number; //directionid
}