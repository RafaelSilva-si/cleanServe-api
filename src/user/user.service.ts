import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserNotExistException } from 'src/exceptions/user-not-exist.exception';

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

  findAll() {
    return this.repo.find();
  }

  findByEmail(email: string) {
    return this.repo.findOne({ where: { email } });
  }

  async update(id: number, updateUser: UpdateUserDto): Promise<User> {
    const user = await this.repo.findOne(id);
    if (!user) throw new UserNotExistException();

    Object.assign(user, updateUser);
    return await this.repo.save(user);
  }

  async remove(id: number) {
    const user = await this.repo.findOne(id);
    if (!user) throw new UserNotExistException();

    return this.repo.remove(user);
  }
}
