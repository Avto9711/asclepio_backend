import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

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
    @Column()

    personId!:number
}