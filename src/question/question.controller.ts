import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { RolesGuard } from 'src/shared/guards';
import { Role } from 'src/shared/role.decorator';
import { CreateQuestionDto } from './dto/createQuestion.dto';
import { UpdateQuestionDto } from './dto/updateQuestion.dto';
import { DeleteQuestionDto } from './dto/deleteQuestion.dto';
import { QuestionService } from './question.service';

@Controller('question')
export class QuestionController {
   constructor(private questionService: QuestionService) {
   }
   @Post()
   @Role('系统管理员')
   @UseGuards(RolesGuard)
   async add(@Body() body: CreateQuestionDto) {
      try {
         await this.questionService.create(body)
         return null
      } catch (error) {
         throw error
      }
   }

   @Post('/update')
   @Role('系统管理员')
   @UseGuards(RolesGuard)
   async edit(@Body() body: UpdateQuestionDto) {
      let res = await this.questionService.update(body)
      let isFinded = res.affected > 0
      if (isFinded) {
         return 'success'
      } else {
         throw new Error('未找到该题目，请刷新后重试')
      }
   }

   @Post('/delete')
   @Role('系统管理员')
   @UseGuards(RolesGuard)
   async delete(@Body() body: DeleteQuestionDto) {
      await this.questionService.delete(body.id)
      return 'success'
   }
}
