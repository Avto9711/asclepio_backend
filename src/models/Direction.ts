import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"
@Entity()
export class Direction {
    @PrimaryGeneratedColumn()
    directionId!: number;
    @Column()
    streetNumber!: string;
    @Column()

    province!: string;
    @Column()
    lat!: number;
    @Column()
    lon!: number

}