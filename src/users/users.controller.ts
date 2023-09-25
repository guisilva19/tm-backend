import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDTO } from './dtos/create-user';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post()
  async create(@Body() body: CreateUserDTO) {
    return this.usersService.createUser(body);
  }

  @Get()
  async findAll() {
    return await this.usersService.findAll();
  }
}
