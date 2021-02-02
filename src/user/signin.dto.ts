import { IsString, Length, MinLength } from 'class-validator'

export class SigninDto {
   @Length(6, 18, {
      message: '用户名长度应在$constraint1-$constraint2位'
   })
   @IsString({
      message: '用户名类型校验错误'
   })
   readonly username: string

   @Length(6, 18, {
      message: '密码长度应在$constraint1-$constraint2位'
   })
   @IsString({
      message: '用户名类型校验错误'
   })
   readonly password: string
}
