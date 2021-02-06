import { Body, Controller, Post, Req, Session, UnauthorizedException, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
   constructor(private AuthService: AuthService) { }

   @Post('login')
   async loginWithPwd(@Body() body: { username: string, password: string }, @Session() session) {
      let result = await this.AuthService.validateUser(body.username, body.password)
      if (result) {
         session.user = result
         return {
            success: 1
         }
      }
      throw new UnauthorizedException('账号或密码错误')


   }
}
