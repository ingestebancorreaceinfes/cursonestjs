import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('preguntas')
export class Pregunta {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  contexto: string;

  @Column()
  enunciado: string;

  @Column()
  opcionesRespuesta: string;
}
