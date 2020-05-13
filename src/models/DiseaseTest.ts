import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"
import { TestResult } from "./enums/TestResult";

@Entity()
export class DiseaseTest {
    @PrimaryGeneratedColumn()
    diseaseTestId!: number;
    @Column()
    testDateTime!: Date;
    @Column()

    testResponsibleId!: number;
    @Column("enum",{enum:TestResult})

    testResult!: TestResult;
    @Column()

    resultDateTime!: Date;
    @Column()

    testComments!: string;
    @Column()

    personId!: number //personid
}

