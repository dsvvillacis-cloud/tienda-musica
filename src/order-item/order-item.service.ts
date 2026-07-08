import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { OrderItemEntity } from './order-item.entity';
import { CreateOrderItemDto } from './dto/create-order-item.dto';

@Injectable()
export class OrderItemService {
  constructor(
    @Inject('ORDER_ITEM_REPOSITORY')
    private orderItemRepository: Repository<OrderItemEntity>,
  ) {}

  async findAll(): Promise<OrderItemEntity[]> {
    return await this.orderItemRepository.find();
  }

  async findOne(id: number): Promise<OrderItemEntity> {
    const orderItem = await this.orderItemRepository.findOne({ where: { id } as any });
    if (!orderItem) {
      throw new NotFoundException(`Ítem de orden con ID ${id} no encontrado`);
    }
    return orderItem;
  }

  async create(createOrderItemDto: CreateOrderItemDto): Promise<OrderItemEntity> {
    const orderItem = this.orderItemRepository.create(createOrderItemDto);
    return await this.orderItemRepository.save(orderItem);
  }
}
