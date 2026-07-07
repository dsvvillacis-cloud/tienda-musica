// src/instrumento/instrumento.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InstrumentoController } from './instrumento.controller';
import { InstrumentoService } from './instrumento.service';
import { Instrumento } from './instrumento.entity';

@Module({
  imports: [
    // Registramos la entidad para que TypeORM la reconozca en la base de datos
    TypeOrmModule.forFeature([Instrumento])
  ],
  controllers: [InstrumentoController],
  providers: [InstrumentoService],
})
export class InstrumentoModule {}