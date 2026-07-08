import { IsNumber, IsPositive, IsString, IsOptional, MaxLength, IsNotEmpty } from 'class-validator';

export class CreateOrderDto {
  @IsNumber({ maxDecimalPlaces: 2 })
  @IsPositive()
  totalAmount: number;

  @IsString()
  @IsOptional()
  @MaxLength(50)
  status?: string;

  @IsNumber()
  @IsNotEmpty()
  userId: number;
}
