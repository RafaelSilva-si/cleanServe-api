import { Injectable } from '@nestjs/common';
import { CreateServiceOrderDto } from './dto/create-service-order.dto';
import { UpdateServiceOrderDto } from './dto/update-service-order.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ServiceOrder } from './entities/service-order.entity';
import { Budget } from 'src/budget/entities/budget.entity';
import { ServiceOrderNotExistException } from 'src/exceptions/service-order-not-exist.exception';
import { ErrorException } from 'src/exceptions/error.exception';
import { BudgetNotExistRelationException } from 'src/exceptions/budget-not-exist-relation.exception';

@Injectable()
export class ServiceOrderService {
  constructor(
    @InjectRepository(ServiceOrder) private repo: Repository<ServiceOrder>,
    @InjectRepository(Budget) private repoBudget: Repository<Budget>,
  ) {}

  async create(createServiceOrderDto: CreateServiceOrderDto) {
    try {
      const budget = await this.repoBudget.findOne({
        where: { id: createServiceOrderDto.budgetId },
      });
      if (!budget) throw new BudgetNotExistRelationException();

      const serviceOrder = new ServiceOrder();
      serviceOrder.budget = budget;

      Object.assign(serviceOrder, createServiceOrderDto);

      return await this.repo.save(serviceOrder);
    } catch (error) {
      throw new ErrorException(error);
    }
  }

  findAll() {
    return this.repo.find({
      relations: [
        'budget',
        'budget.budget',
        'budget.budget.service',
        'budget.client',
      ],
    });
  }

  findOne(id: number) {
    return this.repo.find({
      relations: [
        'budget',
        'budget.budget',
        'budget.budget.service',
        'budget.client',
      ],
      where: { id },
    });
  }

  async update(id: number, updateServiceOrderDto: UpdateServiceOrderDto) {
    try {
      const serviceOrder = await this.repo.findOne(id);
      if (!serviceOrder) throw new ServiceOrderNotExistException();
      Object.assign(serviceOrder, updateServiceOrderDto);

      return await this.repo.save(serviceOrder);
    } catch (error) {
      throw new Error('Erro ao criar Ordem de serviço.');
    }
  }
}
