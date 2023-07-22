import { ConflictException } from '@nestjs/common';

export class CpfDuplicatedException extends ConflictException {
  constructor() {
    super('O CPF informado já está em uso.');
  }
}