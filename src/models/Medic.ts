import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, OneToOne, ManyToMany, ManyToOne } from "typeorm"
import { User } from "./User";
import { Direction } from "./Direction";
import { PersonsSick } from "./PersonsSick";
import { MedicsPersonsSick } from "./MedicsPersonsSick";
@Entity()
export class Medic {
    
    @PrimaryGeneratedColumn()
    medicId!: number;
    @Column()
    name!: string;
    @Column()

    lastName!: string;
    @Column()

    phoneNumber!: string;
    
    @OneToOne(type => Direction)
    @JoinColumn()
    direction!: Direction;

    @OneToOne(type => User)
    @JoinColumn()
    user!: User

    @OneToOne(type => MedicsPersonsSick, medicPersonSicks=> medicPersonSicks.assignedMedic)
    assignedPersonSicks!:  MedicsPersonsSick

}
