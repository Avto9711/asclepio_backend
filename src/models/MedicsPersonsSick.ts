import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"
@Entity()
export class MedicsPersonsSick {
    @PrimaryGeneratedColumn()
    medicsPersonsSickId!: number;
    @Column()
    PersonsSickId!: number // personsickid
    @Column()

    AssignedById!: number //userid
    @Column()

    AssignedDate!: Date
}