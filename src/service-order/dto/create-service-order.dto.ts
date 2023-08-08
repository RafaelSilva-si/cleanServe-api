import { IsString } from 'class-validator';

export class CreateServiceOrderDto {
  @IsString()
  code: number;

  @IsString()
  budgetId: string;

  @IsString()
  dateIni: string;

  @IsString()
  dateEnd: string;

  @IsString()
  status: string;

  @IsString()
  obs: string;
}
