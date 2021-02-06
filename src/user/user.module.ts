import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoleModule } from 'src/role/role.module';
import { UserController } from './user.controller';
import { UserEntity } from './user.entity';
import { UserService } from './user.service';

@Module({
   imports:[TypeOrmModule.forFeature([UserEntity]),RoleModule],
   controllers:[
      UserController
   ],
   providers:[
      UserService
   ],
   exports:[
      TypeOrmModule,
      UserService
   ]
})
export class UserModule {}
