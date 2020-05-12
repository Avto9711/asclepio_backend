import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"
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
    @Column()

    directionId!: number;

    @Column()
    userId!: number
}