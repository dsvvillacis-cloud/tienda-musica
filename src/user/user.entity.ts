import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { OrderEntity } from '../order/order.entity';

@Entity({ name: 'users' })
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'name', type: 'varchar', length: 150 })
  name: string;

  @Column({ name: 'email', type: 'varchar', length: 150, unique: true })
  email: string;

  @Column({ name: 'password', type: 'varchar', length: 255 })
  password: string;

  @Column({ name: 'role', type: 'varchar', length: 50, default: 'client' })
  role: string;

  @Column({ name: 'created_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @OneToMany(() => OrderEntity, (order) => order.user)
  orders: OrderEntity[];
}