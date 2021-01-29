import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
   constructor(private UserService: UserService) {

   }
   @Get('create')
   async create(@Res() res: Response) {
      await this.UserService.createUser({
         nickname: 'test'
      })
      res.send('success')
   }
}
