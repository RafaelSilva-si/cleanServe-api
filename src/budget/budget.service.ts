import { Injectable } from '@nestjs/common';
import { CreateBudgetDto } from './dto/create-budget.dto';
import { UpdateBudgetDto } from './dto/update-budget.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Budget } from './entities/budget.entity';
import { BudgetServiceEntity } from './entities/budget-service.entity';
import { Repository } from 'typeorm';
import { CreateBudgetServiceDto } from './dto/create-budget-service.dto';
import { Service } from 'src/services/entities/service.entity';
import { BudgetNotExistException } from 'src/exceptions/budget-not-exist.exception';
import { Client } from 'src/clients/entities/client.entity';
import { ClientNotExistException } from 'src/exceptions/client-not-exist.exception';
import { BudgetNotExistRelationException } from 'src/exceptions/budget-not-exist-relation.exception';
import { ServiceNotExistRelationException } from 'src/exceptions/service-not-exist-relation.exception';
import { ServiceMustException } from 'src/exceptions/service-must.exception';
import { ErrorException } from 'src/exceptions/error.exception';

@Injectable()
export class BudgetService {
  constructor(
    @InjectRepository(Budget) private repo: Repository<Budget>,
    @InjectRepository(Service) private repoServiceItem: Repository<Service>,
    @InjectRepository(Client) private repoClient: Repository<Client>,
    @InjectRepository(BudgetServiceEntity) private repoService: Repository<BudgetServiceEntity>
  ) {}
  async create(createBudgetDto: CreateBudgetDto) {
    if ( createBudgetDto.services.length <= 0 ) throw new ServiceMustException();

    const clientExist = await this.repoClient.findOne({where: {id: createBudgetDto.clientId}});
    if ( !clientExist ) throw new ClientNotExistException();

    const budget = await this.repo.save(createBudgetDto);
    if ( !budget ) throw new BudgetNotExistRelationException();

    const budgetServicePromises = createBudgetDto.services.map(async (attrs: CreateBudgetServiceDto) => {
      const serviceExist = await this.repoServiceItem.findOne({where: {id: attrs.serviceId}});
      if ( !serviceExist ) throw new ServiceNotExistRelationException();

      const service = await this.repoServiceItem.findOne({where: {id: attrs.serviceId}})
      const budgetService = {
        service: service,
        budget: budget,
        budgetId: String(budget.id),
        qtd: attrs.qtd
      };
      return await this.repoService.save(budgetService);
    });

    try {
      await Promise.all(budgetServicePromises);
    } catch (error) {
      throw new ErrorException(error)
    }
  }

  async findAll() {
    return this.repo.find({ relations: ['budget', 'budget.service', 'client'] });
  }

  findOne(id: number) {
    return this.repo.findOne({ relations: ['budget', 'budget.service', 'client'], where: {id} });
  }

  async update(id: number, updateBudgetDto: UpdateBudgetDto) {
    try {
      const services = await this.repoService.find({where: {budgetId: id}});
      await this.repoService.remove(services);

      const budget = await this.repo.findOne(id);
      if (!budget) throw new BudgetNotExistException();

      Object.assign(budget, updateBudgetDto);
      await this.repo.save(budget);

      if(updateBudgetDto.services) {
        const budgetServicePromises = updateBudgetDto.services.map(async (attrs: CreateBudgetServiceDto) => {
          const service = await this.repoServiceItem.findOne({where: {id: attrs.serviceId}})
          const budgetService = {
            service: service,
            budget: budget,
            budgetId: String(budget.id),
            qtd: attrs.qtd
          };
          return await this.repoService.save(budgetService);
        });
  
        await Promise.all(budgetServicePromises);
      }
      return budget;
    } catch (error) {
      throw new Error('Erro ao editar um orçamento.')
    }
  }
}
