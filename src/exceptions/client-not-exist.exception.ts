import { ConflictException } from "@nestjs/common";

export class ClientNotExistException extends ConflictException {
    constructor() {
        super('Esse Cliente não existe.');
    }
}