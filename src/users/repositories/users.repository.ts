import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { UserEntity } from '../entities/user.entity';
import { NotFounderror } from 'src/common/errors/types/NotFoundError';

@Injectable()
export class UsersRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto): Promise<UserEntity> {
    return this.prisma.user.create({
      data: createUserDto,
      include: {
        posts: {
          select: {
            title: true,
            content: true,
            createdAt: true,
          },
        },
      },
    });
  }

  async findAll(): Promise<UserEntity[]> {
    return this.prisma.user.findMany({
      include: {
        posts: {
          select: {
            title: true,
            content: true,
            createdAt: true,
          },
        },
      },
    });
  }

  async findOne(id: number): Promise<UserEntity> {
    const user = await this.prisma.user.findUnique({
      where: {
        id,
      },
    });
    if (!user) {
      throw new NotFounderror('Usuario Não Encontrado');
    }
    return this.prisma.user.findUnique({
      where: {
        id,
      },
      include: {
        posts: {
          select: {
            title: true,
            content: true,
            createdAt: true,
          },
        },
      },
    });
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<UserEntity> {
    const user = await this.prisma.user.findUnique({
      where: {
        id,
      },
    });
    if (!user) {
      throw new NotFounderror('Usuario Não Encontrado');
    }
    return this.prisma.user.update({
      where: {
        id,
      },
      data: updateUserDto,
      include: {
        posts: {
          select: {
            title: true,
            content: true,
            createdAt: true,
          },
        },
      },
    });
  }

  async remove(id: number): Promise<UserEntity> {
    const user = await this.prisma.user.findUnique({
      where: {
        id,
      },
    });
    if (!user) {
      throw new NotFounderror('Usuario Não Encontrado');
    }
    return this.prisma.user.delete({
      where: {
        id,
      },
    });
  }
}
