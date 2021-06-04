import { IsNumber, IsNumberString, IsString, Length } from "class-validator";

export class CreateQuestionDto {
   @IsString()
   @Length(2, 120, {
      message(arg) {
         return `${arg.property}: 参数长度必须在${arg.constraints[0]}-${arg.constraints[1]}`
      }
   })
   question: string
   @IsNumberString({}, {
      message(arg) {
         return `${arg.property}: 数据类型不符合`
      }
   })
   correctIndex!: number;

   answer0: string;

   readonly answer1?: string;
   readonly answer2?: string;
   readonly answer3?: string;

}