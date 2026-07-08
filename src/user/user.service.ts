import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { UserEntity } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<UserEntity>,
  ) {}

  async findAll(): Promise<UserEntity[]> {
    return await this.userRepository.find();
  }

  async findOne(id: number): Promise<UserEntity> {
    const user = await this.userRepository.findOne({ where: { id } as any });
    if (!user) {
      throw new NotFoundException(`Usuario con ID ${id} no encontrado`);
    }
    return user;
  }

  async create(createUserDto: CreateUserDto): Promise<UserEntity> {
    const user = this.userRepository.create(createUserDto);
    return await this.userRepository.save(user);
  }
}
