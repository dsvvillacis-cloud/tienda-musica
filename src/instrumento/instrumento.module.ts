import { Module } from '@nestjs/common';
import { InstrumentoController } from './instrumento.controller';
import { InstrumentoService } from './instrumento.service';
import { instrumentoProviders } from './instrumento.providers';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [InstrumentoController],
  providers: [...instrumentoProviders, InstrumentoService],
  exports: [InstrumentoService],
})
export class InstrumentoModule {}
