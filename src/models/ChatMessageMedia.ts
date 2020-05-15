import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm"
import { ChatMessage } from "./ChatMessage";
@Entity()
export class ChatMessageMedia{
    @PrimaryGeneratedColumn()
    chatMessageMediaId!:number;
    @Column()
    mediaUrl!:string;

    @ManyToOne(type=> ChatMessage, chatMessage=> chatMessage.messageMedias)
    chatMessage!:ChatMessage //chatmessageid
}