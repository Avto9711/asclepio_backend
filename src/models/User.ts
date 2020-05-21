import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { UserRole } from "./enums/UserRole";
import { MedicsPersonsSick } from "./MedicsPersonsSick";


@Entity()
export class User {
    @PrimaryGeneratedColumn()
    userId!:number;
    
    @Column("enum",{enum:UserRole})
    userRole!:UserRole

    //external Id
    @Column()
    userExternalId!:string
    
    @OneToMany(type=> MedicsPersonsSick, medicsPSick =>  medicsPSick.AssignedBy)
    assignedMedicsPersonsSicks!:MedicsPersonsSick[]
}


