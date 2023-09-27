import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { CreateUserDTO } from './dtos/create-user';
import { Hash } from 'src/helpers/hash';

@Injectable()
export class UsersService {
  constructor(
    private prisma: PrismaService,
    private hash: Hash,
  ) {}

  async createUser(body: CreateUserDTO) {
    const { email, name, password } = body;
    const hashPassword = this.hash.run(password);

    const userExist = await this.prisma.user.findUnique({
      where: { email },
    });

    if (userExist) {
      throw new UnauthorizedException('User already exist');
    }

    return this.prisma.user.create({
      data: {
        email,
        password: hashPassword,
        name,
      },
    });
  }

  async findUnique(id: string) {
    const user = await this.prisma.user.findUnique({
      where: { id },
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return user;
  }

  async findAll() {
    return await this.prisma.user.findMany();
  }

  async updateUser(id: string, data: any) {
    const user = await this.prisma.user.findUnique({
      where: { id },
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return await this.prisma.user.update({
      where: { id },
      data: data,
    });
  }
}
