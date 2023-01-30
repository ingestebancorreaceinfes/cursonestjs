import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class PreguntaImage {

    @PrimaryGeneratedColumn()
    id: number;

    @Column('text')
    url: string;
}