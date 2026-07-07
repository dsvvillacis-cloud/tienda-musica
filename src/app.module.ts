// src/app.module.ts
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InstrumentoModule } from './instrumento/instrumento.module';
import { ConfigModule } from './config/config.module';
import { ConfigService } from './config/config.service';
import { Configuration } from './config/config.keys'; // Importamos las llaves

@Module({
  imports: [
    InstrumentoModule,
    ConfigModule,
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get(Configuration.HOST) || 'localhost',
        username: configService.get(Configuration.USERNAME) || 'postgres',
        password: configService.get(Configuration.PASSWORD) || 'postgres',
        port: parseInt(configService.get(Configuration.DB_PORT), 10) || 5432,
        database: configService.get(Configuration.DATABASE) || 'tienda_instrumentos',
        autoLoadEntities: true,
        synchronize: true,
      }),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}