import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { QuestionEntity } from './question.entity';

@Injectable()
export class QuestionService {
   constructor(
      @InjectRepository(QuestionEntity)
      private repo: Repository<QuestionEntity>,
   ) { }

   create(question: QuestionEntity) {
      let questionTobeSave = this.repo.create(question)
      return this.repo.save(questionTobeSave)
   }
   update(question: QuestionEntity) {
      return this.repo.update(question.id, question)
   }
   delete(id: number) {
      return this.repo.softDelete(id)
   }
}
