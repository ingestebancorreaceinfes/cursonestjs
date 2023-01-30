import { Controller} from '@nestjs/common';
import { Auth } from 'src/auth/decorators';
import { ValidRoles } from 'src/auth/interfaces';
import { CommonsController } from 'src/common/commons.controller';
import { CommonsService } from 'src/common/commons.service';
import { Pregunta } from './entities/pregunta.entity';
import { PreguntasService } from './preguntas.service';

@Controller('preguntas')
export class PreguntasController extends CommonsController<Pregunta>{
    
    constructor(private readonly preguntaService: PreguntasService){
        super();
    }

    getService(): CommonsService<Pregunta> {
        return this.preguntaService;
    }

}
