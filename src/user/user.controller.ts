import { Body, Controller, Get, Post, Query, Req, Res, Session, UseGuards, UsePipes } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Response, Request } from 'express';
import { ValidationPipe } from 'src/pipe/validation.pipe';
import { Role } from 'src/shared/role.decorator';
import { SessionGuard } from 'src/shared/user.guard';
import { SigninDto } from './dto/signin.dto';
import { UserService } from './user.service';

@Controller('user')
// @UseGuards(RolesGuard)
export class UserController {
   constructor(private UserService: UserService) {

   }
   @Get('create')
   @Role('admin')
   async create(@Res() res: Response, @Req() req: Request, @Query() query) {
      await this.UserService.createUser({
         nickname: query.nickname,
         username: query.username,
         password: query.password
      })
      res.send('success')
   }

   @UseGuards(SessionGuard)
   @Get('profile')
   async profile(@Session() session){
      return session.user
   }
   
   @Get('signin')
   async signin(@Query() query:SigninDto){
      return {}
   }
}
