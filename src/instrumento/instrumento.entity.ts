import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { OrderItemEntity } from '../order-item/order-item.entity';

@Entity({ name: 'instrumentos' })
export class InstrumentoEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 150 })
  name: string;

  @Column({ type: 'text', nullable: true })
  description: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  price: number;

  @Column({ type: 'int', default: 0 })
  stock: number;

  @OneToMany(() => OrderItemEntity, (orderItem) => orderItem.instrument)
  orderItems: OrderItemEntity[];
}