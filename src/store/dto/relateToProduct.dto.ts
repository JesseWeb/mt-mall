import { IsInt, IsNotEmpty, IsString, Length } from "class-validator";
import { create } from "domain";

export class RelateToProductDto {
   
   @IsNotEmpty({
      message:"商店ID不能为空"
   })
   storeId!: number

  
   @IsNotEmpty({
      message:"产品ID不能为空"
   })
   productId!: number
}