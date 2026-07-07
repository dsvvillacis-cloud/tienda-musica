import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { InstrumentoService } from './instrumento.service';
import { CreateInstrumentoDto } from './dto/create-instrumento.dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('Instrumentos Musicales')
@Controller('instrumento')
export class InstrumentoController {
  constructor(private readonly service: InstrumentoService) {}

  @Post()
  @ApiOperation({ summary: 'Crear un nuevo instrumento' })
  create(@Body() dto: CreateInstrumentoDto) {
    return this.service.create(dto);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener lista de todos los instrumentos' })
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar un instrumento por su ID' })
  findOne(@Param('id') id: number) {
    return this.service.findOne(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Actualizar los datos de un instrumento' })
  update(@Param('id') id: number, @Body() dto: Partial<CreateInstrumentoDto>) {
    return this.service.update(id, dto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar un instrumento de la tienda' })
  remove(@Param('id') id: number) {
    return this.service.remove(id);
  }
}
