import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseProvider } from 'src/core/baseProvider';
import { Repository } from 'typeorm';
import { UserEntity } from './user.entity';

@Injectable()
export class UserService extends BaseProvider {
   constructor(@InjectRepository(UserEntity) private UserRepository: Repository<UserEntity>) {
      super()
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
   deleteUser(uuid: string) {
      return this.UserRepository.softDelete({
         uuid
      })
   }
}
