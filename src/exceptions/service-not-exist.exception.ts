import { ConflictException } from "@nestjs/common";

export class ServiceNotExistException extends ConflictException {
    constructor() {
        super('Esse serviço não pode ser alterado, pois não existe.');
    }
}