import { ConflictException } from "@nestjs/common";

export class ErrorException extends ConflictException {
    constructor(message: string) {
        super(`Erro: ${message}`);
    }
}