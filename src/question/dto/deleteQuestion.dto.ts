import { IsNotEmpty, IsNumber, IsNumberString, IsString, Length } from "class-validator";

export class DeleteQuestionDto {
   @IsNotEmpty()
   @IsNumberString({}, {
      message(arg) {
         return `id类型错误`
      }
   })
   id: number
}