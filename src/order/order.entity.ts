import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
import { UserEntity } from '../user/user.entity';
import { OrderItemEntity } from '../order-item/order-item.entity';

@Entity({ name: 'orders' })
export class OrderEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'total_amount', type: 'decimal', precision: 10, scale: 2 })
  totalAmount: number;

  @Column({ name: 'status', type: 'varchar', length: 50, default: 'pending' })
  status: string;

  @Column({ name: 'user_id', type: 'int' })
  userId: number;

  @ManyToOne(() => UserEntity, (user) => user.orders, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'user_id' })
  user: UserEntity;

  @OneToMany(() => OrderItemEntity, (orderItem) => orderItem.order)
  orderItems: OrderItemEntity[];
}
