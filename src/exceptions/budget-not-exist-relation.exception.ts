import { ConflictException } from "@nestjs/common";

export class BudgetNotExistRelationException extends ConflictException {
    constructor() {
        super('Esse Orçamento não existe.');
    }
}