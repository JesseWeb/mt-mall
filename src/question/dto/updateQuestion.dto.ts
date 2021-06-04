import { IsNotEmpty, IsNumber, IsNumberString, IsString, Length } from "class-validator";

export class UpdateQuestionDto {
   @IsString()
   @Length(2, 240, {
      message(arg) {
         return `名称参数长度必须在${arg.constraints[0]}-${arg.constraints[1]}`
      }
   })
   question: string
   @IsNumberString({}, {
      message(arg) {
         return `${arg.property}: 数据类型不符合`
      }
   })
   correctIndex!: number

   @IsNotEmpty()
   @IsNumberString({}, {
      message(arg) {
         return `id类型错误`
      }
   })
   id: number
   answer0: string
   answer1?: string
   answer2?: string
   answer3?: string

}