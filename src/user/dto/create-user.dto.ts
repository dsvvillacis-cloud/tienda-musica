import { IsString, IsEmail, IsNotEmpty, IsOptional, MaxLength } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(150)
  name: string;

  @IsEmail()
  @IsNotEmpty()
  @MaxLength(150)
  email: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  password: string;

  @IsString()
  @IsOptional()
  @MaxLength(50)
  role?: string;
}