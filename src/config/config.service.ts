import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as dotenv from 'dotenv';
import * as path from 'path'; // <--- Importamos path para manejar rutas de forma segura

export interface EnvConfig {
  [key: string]: string;
}

@Injectable()
export class ConfigService {
  private readonly envConfig: EnvConfig;

  constructor() {
    const isDevelopmentEnv = process.env.NODE_ENV !== 'production';

    // path.resolve encuentra la raíz real del proyecto sin importar los "__dirname"
    const fileName = isDevelopmentEnv ? '.env.development' : '.env';
    const envFilePath = path.resolve(process.cwd(), fileName); 

    const existsPath = fs.existsSync(envFilePath);

    if (!existsPath) {
      console.log(`El archivo ${fileName} no existe en la ruta: ${envFilePath}`);
      process.exit(0);
    }

    // Lee y parsea el archivo correcto
    this.envConfig = dotenv.parse(fs.readFileSync(envFilePath));
  }

  get(key: string): string {
    return this.envConfig[key];
  }
}