import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { CreateUserDTO } from './dtos/create-user';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async createUser(body: CreateUserDTO) {
    const { email, name, password } = body;

    const user = this.prisma.user.create({
      data: {
        email,
        password,
        name,
      },
    });

    return user;
  }

  async findAll() {
    return await this.prisma.user.findMany();
  }
}
