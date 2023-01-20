import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CommonsService } from "src/common/commons.service";
import { Repository } from "typeorm";
import { Pregunta } from "./entities/pregunta.entity";

@Injectable()
export class PreguntasService extends CommonsService<Pregunta>{
    
    constructor(@InjectRepository(Pregunta) private preguntaRepo: Repository<Pregunta>){
        super();
    }

    getRepository(): Repository<Pregunta> {
        return this.preguntaRepo;
    }
    
}
