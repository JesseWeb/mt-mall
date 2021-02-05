import { IsString, Length } from "class-validator";
import { create } from "domain";

export class CreateStoreDto {
   @IsString()
   @Length(2, 16, {
      message(arg) {
         return `名称参数长度必须在${arg.constraints[0]}-${arg.constraints[1]}`
      }
   })
   name!: string
}