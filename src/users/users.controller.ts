import { Body, Controller, Get, Param, Post, Patch } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDTO } from './dtos/create-user';
import { UpdateUserDTO } from './dtos/update.user';

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

  @Get(':id')
  async findUnique(@Param('id') id: string) {
    return await this.usersService.findUnique(id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() data: UpdateUserDTO) {
    return await this.usersService.updateUser(id, data);
  }
}
