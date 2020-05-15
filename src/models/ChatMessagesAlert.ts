import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm"
import { ChatMessage } from "./ChatMessage";
@Entity()
export class ChatMessagesAlert{
    @PrimaryGeneratedColumn()
    chatMessagesAlertId!:number;
    @Column()
    chatMessagesAlertDate!:Date;
    
    @ManyToOne(type=> ChatMessage, chatMessage=> chatMessage.messageAlerts)
    chatMessage!:ChatMessage
}