import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm"
import { PersonsSick } from "./PersonsSick";
import { ChatMessagesAlert } from "./ChatMessagesAlert";
import { ChatMessageMedia } from "./ChatMessageMedia";

@Entity()
export class ChatMessage{
    @PrimaryGeneratedColumn()
    ChatMessageId!:number;

    @ManyToOne(type=> PersonsSick, personSick => personSick.chatMessages)
    personsSick!:PersonsSick; //personsickid

    @OneToMany(type=> ChatMessagesAlert, chatAlerts=> chatAlerts.chatMessage)
    messageAlerts!:ChatMessagesAlert[]


    @OneToMany(type=> ChatMessageMedia, chatMedia=> chatMedia.chatMessage)
    messageMedias!:ChatMessageMedia[]
    
    @Column()
    IsMedicMessage!:boolean;
    @Column()
    Message!:string;
}