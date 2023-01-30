import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('preguntas')
export class Pregunta {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  contexto: string;

  @Column()
  enunciado: string;

  @Column()
  opcionesRespuesta: string;
}
