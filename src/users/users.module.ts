import { Module } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';

@Module({
  controllers: [UsersController],
  providers: [PrismaService, UsersService],
})
export class UsersModule {}
