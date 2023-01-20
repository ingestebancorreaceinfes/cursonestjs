import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CompentenciasModule } from './compentencias/compentencias.module';
import { AfirmacionesModule } from './afirmaciones/afirmaciones.module';
import { EvidenciasModule } from './evidencias/evidencias.module';
import { TareasModule } from './tareas/tareas.module';
import { PreguntasModule } from './preguntas/preguntas.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'Ec1007256470',
      database: 'enlazaa_db',
      autoLoadEntities: true,
      synchronize: true
    }),
    CompentenciasModule,
    AfirmacionesModule,
    EvidenciasModule,
    TareasModule,
    PreguntasModule,
    UsersModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
