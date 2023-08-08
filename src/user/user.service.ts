import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private repo: Repository<User>) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const data = this.repo.create({
      ...createUserDto,
      password: await bcrypt.hash(createUserDto.password, 10),
    });
    return this.repo.save(data);
  }

  findByEmail(email: string) {
    return this.repo.findOne({ where: { email } });
  }
}
