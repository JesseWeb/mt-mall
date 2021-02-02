import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './user.entity';

@Injectable()
export class UserService {
   constructor(@InjectRepository(UserEntity) private UserRepository: Repository<UserEntity>) {

   }
   getUserByUUID(uuid) {
      return this.UserRepository.find({
         where: {
            uuid
         }
      })
   }
   createUser(user: UserEntity) {
      return this.UserRepository.save(user)
   }
   getUserByUsername(username: string) {
      return this.UserRepository.findOne({
         where: {
            username
         }
      })
   }
}
