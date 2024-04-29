import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserRepository } from './repositories/user.repository';
import { NotFounderror } from 'src/common/errors/types/NotFoundError';
import { UserEntity } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(private readonly userRepository: UserRepository) {}
  create(createUserDto: CreateUserDto) {
    return this.userRepository.create(createUserDto);
  }

  findAll() {
    // throw new UnauthorizedError('Nao autorizado');
    return this.userRepository.findAll();
  }

  async findOne(id: number): Promise<UserEntity> {
    const user = await this.userRepository.findOne(id);
    if (!user) {
      throw new NotFounderror('Usuario Não Encontrado');
    }
    return user;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.userRepository.update(id, updateUserDto);
  }

  remove(id: number) {
    return this.userRepository.remove(id);
  }
}
