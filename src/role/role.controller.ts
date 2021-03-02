import { Body, Controller, Delete, Get, Post, Query, UseGuards } from '@nestjs/common';
import { SessionGuard } from 'src/shared/guards';
import { CreateRoleDto } from './dto/createRole.dto';
import { DeleteRoleDto } from './dto/deleteRoleDto';
import { GetAllDto } from './dto/getAll.dto';
import { RoleService } from './role.service';

@Controller('role')
export class RoleController {
   constructor(private roleService: RoleService) { }

   @UseGuards(SessionGuard)
   @Post()
   async createRole(@Body() body: CreateRoleDto) {
      try {
         await this.roleService.create({ name: body.name })
      } catch (error) {
         throw error
      }
      return `success`
   }

   @Get('get_all')
   async getAllRole(@Query() query: GetAllDto) {
      return this.roleService.getAll(query.pageSize, query.pageNumber, query.keyWord)
   }

   @Delete()
   async deleteRole(@Body() body: DeleteRoleDto) {
      return this.roleService.softDelete(body.id)
   }
}
