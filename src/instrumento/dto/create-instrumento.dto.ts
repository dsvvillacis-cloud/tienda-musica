import { ApiProperty } from '@nestjs/swagger';

export class CreateInstrumentoDto {
  @ApiProperty({ description: 'Nombre del instrumento', example: 'Guitarra Eléctrica' })
  nombre!: string;

  @ApiProperty({ description: 'Marca del instrumento', example: 'Fender' })
  marca!: string;

  @ApiProperty({ description: 'Tipo o categoría de instrumento', example: 'Cuerda' })
  tipo!: string;

  @ApiProperty({ description: 'Precio del instrumento', example: 1200.50 })
  precio!: number;

  @ApiProperty({ description: 'Cantidad disponible en bodega', example: 15 })
  stock!: number;
}
