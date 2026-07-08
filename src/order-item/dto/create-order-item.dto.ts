import { IsNumber, IsPositive, IsInt, IsNotEmpty } from 'class-validator';

export class CreateOrderItemDto {
  @IsInt()
  @IsPositive()
  quantity: number;

  @IsNumber({ maxDecimalPlaces: 2 })
  @IsPositive()
  unitPrice: number;

  @IsNumber()
  @IsNotEmpty()
  orderId: number;

  @IsNumber()
  @IsNotEmpty()
  instrumentId: number;
}
