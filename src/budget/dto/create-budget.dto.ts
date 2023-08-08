import { IsArray, IsNumber, IsObject, IsString } from 'class-validator';
import { CreateBudgetServiceDto } from './create-budget-service.dto';

export class CreateBudgetDto {
  @IsString()
  code: number;

  @IsNumber()
  discount: number;

  @IsNumber()
  price: number;

  @IsString()
  clientId: string;

  @IsString()
  street: string;

  @IsString()
  state: string;

  @IsString()
  zipCode: string;

  @IsString()
  city: string;

  @IsString()
  status: string;

  @IsString()
  addressDescription: string;

  @IsArray()
  services: CreateBudgetServiceDto[];
}
