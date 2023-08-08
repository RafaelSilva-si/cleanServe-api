import { IsObject, IsString } from 'class-validator';
import { Budget } from '../entities/budget.entity';

export class CreateBudgetServiceDto {
  @IsObject()
  budget: Budget;

  @IsObject()
  serviceId: string;

  @IsString()
  qtd: string;
}
