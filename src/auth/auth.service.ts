import { Injectable } from '@nestjs/common';
import { Request } from 'express';
import { UserEntity } from 'src/user/user.entity';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
   constructor(private userService: UserService) { }
   async validateUser(username: string, password: string) {
      const user = await this.userService.getUserByUsername(username)
      if (user && user.password === password) {
         delete user.password
         return user
      }
      return null
   }
}
