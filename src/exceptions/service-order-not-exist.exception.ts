import { ConflictException } from "@nestjs/common";

export class ServiceOrderNotExistException extends ConflictException {
    constructor() {
        super('Essa Ordem não pode ser alterado, pois não existe.');
    }
}