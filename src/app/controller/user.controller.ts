import { Controller, Get, Post, Body } from '@nestjs/common';
import { UserService } from '../service/user.service';
import { RoleService } from '../service/role.service';
import * as bcrypt from 'bcrypt';

@Controller('user')
export class UserController {
  constructor(
    private userService: UserService,
    private roleService: RoleService,
  ) {}

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Post()
  async create(@Body() data: any) {
    // console.log(data);
    const saltOrRounds = 10;

    data.password = await bcrypt.hash(data.password, saltOrRounds);
    let roles = await this.roleService.findByName(data.roles);
    let role = roles.map((role) => role._id);
    data.roles = role;
    // console.log(data);
    // return this.userService.create(data);
  }
}
