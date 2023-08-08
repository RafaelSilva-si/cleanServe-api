import { IsEmail, IsNumber, IsString } from 'class-validator';

export class CreateClientDto {
  @IsString()
  name: string;

  @IsString()
  CPF: string;

  @IsEmail()
  email: string;

  @IsString()
  phone: string;

  @IsString()
  street: string;

  @IsString()
  state: string;

  @IsString()
  zipCode: string;

  @IsString()
  city: string;

  @IsString()
  addressDescription: string;

  @IsNumber()
  status: number;

  @IsString()
  createdAt: string;
}
