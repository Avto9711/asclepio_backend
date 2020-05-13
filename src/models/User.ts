import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"
import { UserRole } from "./enums/UserRole";


@Entity()
export class User{
    @PrimaryGeneratedColumn()
    userId!:number;
    @Column("enum",{enum:UserRole})
    userRole!:UserRole
    
    
}


