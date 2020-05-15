
import { Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn, OneToMany } from "typeorm"
import { DiseaseTest } from "./DiseaseTest";
import { ChatMessage } from "./ChatMessage";
@Entity()
export class PersonsSick {
    @PrimaryGeneratedColumn()
    personsSickId!: number;
    
    @OneToOne(type => DiseaseTest)
    @JoinColumn()
    diseaseTest!: DiseaseTest; //diseasetestid

    @OneToMany(type => ChatMessage, chatMessage=> chatMessage.personsSick)
    chatMessages!:ChatMessage[]
}