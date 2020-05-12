import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Person {
    @PrimaryGeneratedColumn()
    personId!: number;
    @Column()
    identificationNumber!: number;
    @Column()

    lastName!: string;
    @Column()

    phoneNumber!: string
    @Column()

    directionId!: number; //Fk

    @Column()
    userId!: number;
}