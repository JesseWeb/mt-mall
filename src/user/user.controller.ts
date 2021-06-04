import { Body, Controller, Delete, Get, Post, Put, Query, Req, Res, Session, UseGuards } from '@nestjs/common';
import { Response, Request } from 'express';
import { Role } from 'src/shared/role.decorator';
import { RolesGuard, SessionGuard } from 'src/shared/guards';
import { SigninDto } from './dto/signin.dto';
import { UserService } from './user.service';
import { BindRole } from './dto/bindRole.dto';

@Controller('user')
export class UserController {
   constructor(private UserService: UserService) {

   }
   @Post()
   @Role('系统管理员')
   @UseGuards(RolesGuard)
   async create(@Req() req: Request, @Body() body) {
      await this.UserService.createUser({
         nickname: body.nickname,
         username: body.username,
         password: body.password,
      })
      return `success`
   }
   @Delete()
   async delete(@Body() body) {
      await this.UserService.deleteUser(body.uuid)
   }

   @UseGuards(SessionGuard)
   @Get('profile')
   async profile(@Session() session) {
      let id = session.user.id
      let res = await this.UserService.getUserProfile(id)
      return res
      // return session.user
   }

   @Put('bind_role')
   async bindRole(@Body() body: BindRole) {
      return this.UserService.bindRole(Number(body.userId), Number(body.roleId))
   }


   @Get('get_user_of_role')
   async fineUserOfRole(@Query() query: AnyObject) {
      return await this.UserService.findUserOfRole(query.roleId)
   }
}
