import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"
@Entity()
export class ChatMessageMedia{
    @PrimaryGeneratedColumn()
    chatMessageMediaId!:number;
    @Column()
    mediaUrl!:string;
    @Column()
    chatMessageId!:number //chatmessageid
}