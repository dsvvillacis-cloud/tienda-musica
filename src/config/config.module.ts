// src/config/config.module.ts
import { Module } from '@nestjs/common';
import { ConfigService } from './config.service';

@Module({
  providers: [ConfigService],
  exports: [ConfigService], // Exportamos el servicio para que esté disponible en toda la app
})
export class ConfigModule {}