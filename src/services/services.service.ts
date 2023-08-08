import { Injectable } from '@nestjs/common';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Service } from './entities/service.entity';
import { Repository } from 'typeorm';
import { ServiceDuplicatedException } from 'src/exceptions/service-dupicated.exception';
import { ServiceNotExistException } from 'src/exceptions/service-not-exist.exception';

@Injectable()
export class ServicesService {
  constructor(@InjectRepository(Service) private repo: Repository<Service>) {}

  async create(createServiceDto: CreateServiceDto) {
    const exist = await this.repo.findOne({
      where: { code: createServiceDto.code },
    });
    if (exist) throw new ServiceDuplicatedException();

    return this.repo.save(createServiceDto);
  }

  findAll() {
    return this.repo.find();
  }

  findOne(id: number) {
    return this.repo.findOne(id);
  }

  async update(id: number, updateServiceDto: UpdateServiceDto) {
    const service = await this.repo.findOne(id);
    if (!service) throw new ServiceNotExistException();

    Object.assign(service, updateServiceDto);
    return await this.repo.save(service);
  }

  async remove(id: number) {
    const service = await this.repo.findOne(id);
    if (!service) throw new ServiceNotExistException();

    return this.repo.remove(service);
  }
}
