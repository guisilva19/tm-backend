import { Module } from '@nestjs/common';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { PrismaService } from './database/prisma.service';
import { Hash } from './helpers/hash';

@Module({
  controllers: [UsersController],
  providers: [UsersService, PrismaService, Hash],
})
export class AppModule {}
