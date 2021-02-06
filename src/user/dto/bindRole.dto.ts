import { Type } from 'class-transformer'
import { IsNotEmpty, IsNumber, IsString, Length, MinLength, ValidationArguments } from 'class-validator'

export class BindRole {
   @IsNotEmpty()
   @IsNumber()
   @Type(()=>Number)
   roleId: number

   @IsNotEmpty()
   @Type(()=>Number)
   @IsNumber()
   userId: number
}
