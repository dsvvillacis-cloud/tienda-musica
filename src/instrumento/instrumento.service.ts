import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InstrumentoEntity } from './instrumento.entity';
import { CreateInstrumentoDto } from './dto/create-instrumento.dto';

@Injectable()
export class InstrumentoService {
  constructor(
    @Inject('INSTRUMENTO_REPOSITORY')
    private instrumentoRepository: Repository<InstrumentoEntity>,
  ) {}

  async findAll(): Promise<InstrumentoEntity[]> {
    return await this.instrumentoRepository.find();
  }

  async findOne(id: number): Promise<InstrumentoEntity> {
    const instrumento = await this.instrumentoRepository.findOne({ where: { id } as any });
    if (!instrumento) {
      throw new NotFoundException(`Instrumento con ID ${id} no encontrado`);
    }
    return instrumento;
  }

  async create(createInstrumentoDto: CreateInstrumentoDto): Promise<InstrumentoEntity> {
    const instrumento = this.instrumentoRepository.create(createInstrumentoDto);
    return await this.instrumentoRepository.save(instrumento);
  }
}
