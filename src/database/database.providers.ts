import { DataSource } from 'typeorm';
import { UserEntity } from '../user/user.entity';
import { InstrumentoEntity } from '../instrumento/instrumento.entity';
import { OrderEntity } from '../order/order.entity';
import { OrderItemEntity } from '../order-item/order-item.entity';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dbName = process.env.DB_NAME || 'tienda_musica';
      console.log(`Conectando a la base de datos: ${dbName}`);

      const dataSource = new DataSource({
        type: 'postgres',
        host: process.env.DB_HOST || 'localhost',
        port: parseInt(process.env.DB_PORT || '5432', 10),
        username: process.env.DB_USER || 'postgres',
        password: process.env.DB_PASSWORD || 'postgres',
        database: dbName,
        entities: [UserEntity, InstrumentoEntity, OrderEntity, OrderItemEntity],
        synchronize: true,
      });

      const conexion = await dataSource.initialize();
      console.log('¡Conexión exitosa y tablas sincronizadas en tienda_musica!');
      return conexion;
    },
  },
];
