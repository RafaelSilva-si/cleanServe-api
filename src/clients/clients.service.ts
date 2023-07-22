import { Injectable } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Client } from './entities/client.entity';
import { Repository } from 'typeorm';
import { CpfDuplicatedException } from 'src/exceptions/cpf-duplicated.exception';
import { UserNotExistException } from 'src/exceptions/user-not-exist.exception';

@Injectable()
export class ClientsService {
  constructor(@InjectRepository(Client) private repo: Repository<Client>){}

  async create(createClientDto: CreateClientDto) {
    const existClient = await this.repo.findOne({where: {CPF: createClientDto.CPF}});
    if ( existClient ) throw new CpfDuplicatedException();

    const data = {
      ...createClientDto,
      createdAt: new Date()
    };

    return await this.repo.save(data);
  }

  findAll() {
    return this.repo.find();
  }

  findOne(id: number) {
    return this.repo.findOne(id);
  }

  async update(id: number, updateClientDto: UpdateClientDto) {
    let client = await this.repo.findOne(id);
    if ( !client ) throw new UserNotExistException();
    
    Object.apply(client, updateClientDto);

    return await this.repo.save(client);
  }

  async remove(id: number) {
    const client = await this.repo.findOne(id);
    if ( !client ) throw new UserNotExistException();

    return this.repo.remove(client);
  }
}
