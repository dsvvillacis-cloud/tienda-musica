import { IsString, IsNotEmpty, IsOptional, IsNumber, IsPositive, Min } from 'class-validator';

export class CreateInstrumentoDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsNumber({ maxDecimalPlaces: 2 })
  @IsPositive()
  price: number;

  @IsNumber()
  @Min(0)
  stock: number;
}
