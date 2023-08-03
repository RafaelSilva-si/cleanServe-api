import { IsNumber, IsObject, IsString } from "class-validator";
import { Budget } from "../entities/budget.entity";
import { Service } from "src/services/entities/service.entity";

export class CreateBudgetServiceDto {
    @IsObject()
    budget: Budget

    @IsObject()
    serviceId: string

    @IsString()
    qtd: string
}
