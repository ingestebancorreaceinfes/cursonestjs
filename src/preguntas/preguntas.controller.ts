import { Controller, UsePipes, ValidationPipe } from '@nestjs/common';
import { CommonsController } from 'src/common/commons.controller';
import { CommonsService } from 'src/common/commons.service';
import { Pregunta } from './entities/pregunta.entity';
import { PreguntasService } from './preguntas.service';

@Controller('api/preguntas')
export class PreguntasController extends CommonsController<Pregunta>{
    
    constructor(private readonly preguntaService: PreguntasService){
        super();
    }

    getService(): CommonsService<Pregunta> {
        return this.preguntaService;
    }
}
