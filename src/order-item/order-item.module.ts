import { Module } from '@nestjs/common';
import { OrderItemController } from './order-item.controller';
import { OrderItemService } from './order-item.service';
import { DatabaseModule } from '../database/database.module';
import { OrderItemEntity } from './order-item.entity';
import { DataSource } from 'typeorm';

@Module({
  imports: [DatabaseModule],
  controllers: [OrderItemController],
  providers: [
    OrderItemService,
    {
      provide: 'ORDER_ITEM_REPOSITORY',
      useFactory: (dataSource: DataSource) => dataSource.getRepository(OrderItemEntity),
      inject: ['DATA_SOURCE'],
    },
  ],
  exports: [OrderItemService],
})
export class OrderItemModule {}
