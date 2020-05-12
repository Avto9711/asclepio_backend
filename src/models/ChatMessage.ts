import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class ChatMessage{
    @PrimaryGeneratedColumn()
    ChatMessageId!:number;
    @Column()
    PersonsSickId!:number; //personsickid
    @Column()
    IsMedicMessage!:boolean;
    @Column()
    Message!:string;
}