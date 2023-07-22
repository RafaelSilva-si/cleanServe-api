import { ConflictException } from '@nestjs/common';

export class UserNotExistException extends ConflictException {
  constructor() {
    super('O Usuário informado não pode ser alterado, pois não existe.');
  }
}