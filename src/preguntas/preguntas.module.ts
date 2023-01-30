import { Module } from '@nestjs/common';
import { PreguntasService } from './preguntas.service';
import { PreguntasController } from './preguntas.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pregunta, PreguntaImage } from './entities';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [TypeOrmModule.forFeature([Pregunta, PreguntaImage]), AuthModule],
  providers: [PreguntasService],
  controllers: [PreguntasController]
})
export class PreguntasModule {}
