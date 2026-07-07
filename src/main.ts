import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from './config/config.service'; // <-- Importamos tu servicio
import { Configuration } from './config/config.keys';    // <-- Importamos tus llaves

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Accedemos al ConfigService usando el contexto de la app de NestJS
  const configService = app.get(ConfigService);

  // Obtenemos el puerto desde tu .env.development usando la llave correcta
  const port = configService.get(Configuration.PORT) || 3000;

  await app.listen(port);
  console.log(`La aplicación se está ejecutando en el puerto: ${port}`);
}
bootstrap();
