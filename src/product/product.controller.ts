import { Controller, Get, Post, Query } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
   constructor(private productService: ProductService) {

   }
   @Get()
   findOne(@Query() query): any {
      this.productService.findOne(query.id)
   }
}
