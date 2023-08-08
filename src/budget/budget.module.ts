import { Module } from '@nestjs/common';
import { BudgetService } from './budget.service';
import { BudgetController } from './budget.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Budget } from './entities/budget.entity';
import { BudgetServiceEntity } from './entities/budget-service.entity';
import { Service } from 'src/services/entities/service.entity';
import { Client } from 'src/clients/entities/client.entity';

@Module({
  controllers: [BudgetController],
  providers: [BudgetService],
  imports: [
    TypeOrmModule.forFeature([Budget, BudgetServiceEntity, Service, Client]),
  ],
})
export class BudgetModule {}
