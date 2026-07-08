import { Controller, Get, Post, Body } from '@nestjs/common';
import { InstrumentoService } from './instrumento.service';
import { CreateInstrumentoDto } from './dto/create-instrumento.dto';

@Controller('instrumentos')
export class InstrumentoController {
  constructor(private readonly instrumentoService: InstrumentoService) {}

  @Get()
  findAll() {
    return this.instrumentoService.findAll();
  }

  @Post()
  create(@Body() createInstrumentoDto: CreateInstrumentoDto) {
    return this.instrumentoService.create(createInstrumentoDto);
  }
}