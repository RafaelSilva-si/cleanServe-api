import { Client } from 'src/clients/entities/client.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { BudgetServiceEntity } from './budget-service.entity';

@Entity()
export class Budget {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  code: number;

  @Column()
  discount: number;

  @Column()
  price: number;

  @Column()
  clientId: string;

  @ManyToOne(() => Client, (client) => client.id, { nullable: true })
  @JoinTable()
  client: Client;

  @Column()
  street: string;

  @Column()
  state: string;

  @Column()
  zipCode: string;

  @Column()
  city: string;

  @Column()
  addressDescription: string;

  @Column({ nullable: true })
  status: string;

  @OneToMany(
    () => BudgetServiceEntity,
    (budgetService) => budgetService.budget,
    { cascade: true },
  )
  @JoinTable()
  budget: BudgetServiceEntity[];
}
