import { Module } from '@nestjs/common';
import { PreguntasService } from './preguntas.service';
import { PreguntasController } from './preguntas.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pregunta } from './entities/pregunta.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Pregunta])],
  providers: [PreguntasService],
  controllers: [PreguntasController]
})
export class PreguntasModule {}
