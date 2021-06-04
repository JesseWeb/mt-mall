import { Module } from '@nestjs/common';
import { ContestService } from './contest.service';
import { ContestController } from './contest.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContestEntity } from './contest.entity'

@Module({
  imports: [TypeOrmModule.forFeature([ContestEntity])],
  controllers: [ContestController],
  providers: [ContestService, TypeOrmModule],
})
export class ContestModule { }




