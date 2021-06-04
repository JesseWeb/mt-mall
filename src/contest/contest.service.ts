import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseProvider } from 'src/core/baseProvider';
import { Repository } from 'typeorm';
import { ContestEntity } from './contest.entity';

@Injectable()
export class ContestService extends BaseProvider {
   constructor(@InjectRepository(ContestEntity) private contestRepo: Repository<ContestEntity>) {
      super()
   }
   create(instance: ContestEntity) {
      let instanceToSave = this.contestRepo.create(instance)
      return this.contestRepo.save(instanceToSave)
   }
}
