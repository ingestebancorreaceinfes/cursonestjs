import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Probando Proyecto de Nest JS!';
  }
}
