import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToOne, JoinColumn } from "typeorm"
import { User } from "./User";
import { PersonsSick } from "./PersonsSick";
import { Medic } from "./Medic";
@Entity()
export class MedicsPersonsSick {
    @PrimaryGeneratedColumn()
    medicsPersonsSickId!: number;

    @OneToOne(type=> PersonsSick)
    @JoinColumn()
    PersonsSick!: PersonsSick // personsickid

    @ManyToOne(type => User)
    AssignedBy!: User //userid

    @ManyToOne(type=> Medic, medic=> medic.assignedPersonSicks)
    assignedMedic!:Medic; //medidId

    @Column()
    AssignedDate!: Date
}