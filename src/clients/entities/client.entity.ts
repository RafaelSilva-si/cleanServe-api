import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Client {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  CPF: string;

  @Column()
  email: string;

  @Column()
  phone: string;

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

  @Column()
  status: number;

  @Column()
  createdAt: Date;
}
