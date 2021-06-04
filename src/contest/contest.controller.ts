import { Controller, Post, Session } from '@nestjs/common';
import { BaseProvider } from 'src/core/baseProvider';
import { ContestService } from './contest.service';

@Controller('contest')
export class ContestController extends BaseProvider {
   constructor(private service: ContestService) {
      super()
   }
   @Post(`/roll`)
   async roll(@Session() session) {
      let success = .5
      let rate = Math.random()
      let prize = 1
      if (rate > success) {
         await this.service.create({
            prize,
            user: session.user.id,
         })
         return {
            prize
         }
      }else{
         await this.service.create({
            prize:null,
            user: session.user.id,
         })
         return null
      }
   }
}
