import { Body, Controller, Delete, Get, Post, Query, Req, Res, Session, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Response, Request } from 'express';
import { ValidationPipe } from 'src/pipe/validation.pipe';
import { Role } from 'src/shared/role.decorator';
import { SessionGuard } from 'src/shared/guards';
import { SigninDto } from './dto/signin.dto';
import { UserService } from './user.service';

@Controller('user')
// @UseGuards(RolesGuard)
export class UserController {
   constructor(private UserService: UserService) {

   }
   @Post('create')
   // @Role('admin')
   async create(@Res() res: Response, @Req() req: Request, @Body() body) {
      await this.UserService.createUser({
         nickname: body.nickname,
         username: body.username,
         password: body.password
      })
      res.send('success')
   }
   @Delete()
   async delete(@Body() body) {
      await this.UserService.deleteUser(body.uuid)
   }

   @UseGuards(SessionGuard)
   @Get('profile')
   async profile(@Session() session) {
      return session.user
   }

   @Get('signin')
   async signin(@Query() query: SigninDto) {
      return {}
   }
}
