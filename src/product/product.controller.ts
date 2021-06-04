import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { CreateProductDto } from './dto/createProduct.dto';
import { ProductService } from './product.service';

@Controller('products')
export class ProductController {
   constructor(private productService: ProductService) {
   }
   @Get()   
   findAll(@Query() query): any {
      this.productService.findAll()
   }
   @Post()
   async create(@Body() body: CreateProductDto) {
      return await this.productService.create(body)
   }

}
