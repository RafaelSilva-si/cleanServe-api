import { ConflictException } from "@nestjs/common";

export class BudgetNotExistException extends ConflictException {
    constructor() {
        super('Esse Orçamento não pode ser alterado, pois não existe.');
    }
}