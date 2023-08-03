import { ConflictException } from "@nestjs/common";

export class ServiceDuplicatedException extends ConflictException {
    constructor() {
        super('O serviço informado, já existe.');
    }
}