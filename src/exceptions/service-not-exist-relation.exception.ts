import { ConflictException } from "@nestjs/common";

export class ServiceNotExistRelationException extends ConflictException {
    constructor() {
        super('Esse Serviço não existe.');
    }
}