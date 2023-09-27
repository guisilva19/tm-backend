import { Module } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { Hash } from 'src/helpers/hash';

@Module({
  controllers: [UsersController],
  providers: [PrismaService, UsersService, Hash],
})
export class UsersModule {}
