import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"
@Entity()
export class ChatMessagesAlert{
    @PrimaryGeneratedColumn()
    chatMessagesAlertId!:number;
    @Column()
    chatMessagesAlertDate!:Date;
    @Column()
    chatMessageId!:number
}