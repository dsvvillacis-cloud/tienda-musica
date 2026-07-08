import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { OrderEntity } from './order.entity';
import { CreateOrderDto } from './dto/create-order.dto';

@Injectable()
export class OrderService {
  constructor(
    @Inject('ORDER_REPOSITORY')
    private orderRepository: Repository<OrderEntity>,
  ) {}

  async findAll(): Promise<OrderEntity[]> {
    return await this.orderRepository.find({ relations: { user: true, orderItems: true } });
  }

  async findOne(id: number): Promise<OrderEntity> {
    const order = await this.orderRepository.findOne({ where: { id } as any, relations: { user: true, orderItems: true } });
    if (!order) {
      throw new NotFoundException(`Orden con ID ${id} no encontrada`);
    }
    return order;
  }

  async create(createOrderDto: CreateOrderDto): Promise<OrderEntity> {
    const order = this.orderRepository.create(createOrderDto);
    return await this.orderRepository.save(order);
  }
}
