import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Instrumento } from './instrumento.entity';
import { CreateInstrumentoDto } from './dto/create-instrumento.dto';

@Injectable()
export class InstrumentoService {
  constructor(
    @InjectRepository(Instrumento)
    private readonly repository: Repository<Instrumento>,
  ) {}

  async create(dto: CreateInstrumentoDto): Promise<Instrumento> {
    const nuevo = this.repository.create(dto);
    return await this.repository.save(nuevo);
  }

  async findAll(): Promise<Instrumento[]> {
    return await this.repository.find();
  }

  async findOne(id: number): Promise<Instrumento | null> {
    return await this.repository.findOneBy({ id });
  }

  async update(id: number, dto: Partial<CreateInstrumentoDto>): Promise<Instrumento | null> {
    await this.repository.update(id, dto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
