import { ConflictException } from "@nestjs/common";

export class ServiceMustException extends ConflictException {
    constructor() {
        super('O orçamento precisa ter pelo menos um serviço.');
    }
}