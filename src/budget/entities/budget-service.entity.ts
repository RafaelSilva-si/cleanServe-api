import { Service } from 'src/services/entities/service.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Budget } from './budget.entity';

@Entity({ name: 'budgetService' })
export class BudgetServiceEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  qtd: string;

  @Column()
  budgetId: string;

  @ManyToOne(() => Service, (service) => service.id, { nullable: true })
  service: Service;

  @ManyToOne(() => Budget, (budget) => budget.budget, { nullable: true })
  @JoinTable()
  budget: Budget;
}
