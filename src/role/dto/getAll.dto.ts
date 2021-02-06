import { Type } from "class-transformer";
import { IsNumber, IsNumberString, Max, Min } from "class-validator";

export class GetAllDto {
   @IsNumber()
   @Type(() => Number)
   @Min(0)
   pageNumber: number;

   @IsNumber()
   @Type(() => Number)
   @Min(5)
   @Max(50)
   pageSize: number


   keyWord: string
}