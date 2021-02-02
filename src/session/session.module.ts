import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SessionEntity } from './session.entity';

@Module({
   imports: [
      TypeOrmModule.forFeature([SessionEntity])
   ],
   exports: [
      TypeOrmModule
   ]
})
export class SessionModule { }
