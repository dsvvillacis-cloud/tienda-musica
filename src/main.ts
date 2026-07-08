import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 1. Activamos la validación global de los DTOs
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Elimina propiedades que no estén en los DTOs
      forbidNonWhitelisted: true, // Rechaza la petición si envían propiedades extra
      transform: true, // Transforma los tipos de datos automáticamente (ej. string a number en params/query)
    }),
  );

  // 2. Configuración de Swagger (Documentación de la API)
  const config = new DocumentBuilder()
    .setTitle('API Tienda de Música')
    .setDescription('Documentación de los endpoints para la tienda de música')
    .setVersion('1.0')
    .addBearerAuth() // Por si usas autenticación JWT más adelante
    .build();
    
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  // 3. Puerto de escucha
  const port = process.env.PORT || 3000;
  await app.listen(port);
  console.log(`Servidor de la tienda de música corriendo en el puerto ${port}`);
  console.log(`Documentación de Swagger disponible en http://localhost:${port}/api`);
}
bootstrap();