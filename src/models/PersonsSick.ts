
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"
@Entity()
export class PersonsSick {
    @PrimaryGeneratedColumn()
    personsSickId!: number;
    @Column()
    personId!: number; //personid
    @Column()
    diseaseTestId!: number; //diseasetestid
}