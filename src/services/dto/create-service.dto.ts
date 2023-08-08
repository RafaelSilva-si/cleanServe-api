import { IsNumber, IsString } from 'class-validator';

export class CreateServiceDto {
  @IsString()
  name: string;

  @IsString()
  code: string;

  @IsNumber()
  measurementUnit: number;

  @IsNumber()
  measurementPrice: number;

  @IsNumber()
  status: number;
}
