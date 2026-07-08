import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { OrderEntity } from '../order/order.entity';
import { InstrumentoEntity } from '../instrumento/instrumento.entity';

@Entity({ name: 'order_items' })
export class OrderItemEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'quantity', type: 'int' })
  quantity: number;

  @Column({ name: 'unit_price', type: 'decimal', precision: 10, scale: 2 })
  unitPrice: number;

  @Column({ name: 'order_id', type: 'int' })
  orderId: number;

  @Column({ name: 'instrument_id', type: 'int' })
  instrumentId: number;

  @ManyToOne(() => OrderEntity, (order) => order.orderItems, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'order_id' })
  order: OrderEntity;

  @ManyToOne(() => InstrumentoEntity, (instrument) => instrument.orderItems, { onDelete: 'RESTRICT' })
  @JoinColumn({ name: 'instrument_id' })
  instrument: InstrumentoEntity;
}