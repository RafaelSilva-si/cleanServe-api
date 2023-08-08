import { Budget } from 'src/budget/entities/budget.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'serviceOrder' })
export class ServiceOrder {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  code: string;

  @Column()
  budgetId: string;

  @Column()
  dateIni: Date;

  @Column()
  dateEnd: Date;

  @Column()
  status: string;

  @Column()
  obs: string;

  @ManyToOne(() => Budget, (budget) => budget.budget, { nullable: true })
  budget: Budget;
}
