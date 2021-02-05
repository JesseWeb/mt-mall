import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductController } from './product.controller';
import { ProductEntity } from './product.entity';
import { ProductService } from './product.service';

@Module({
   imports: [TypeOrmModule.forFeature([ProductEntity])],
   providers: [
      ProductService
   ],
   controllers: [
      ProductController
   ],
   exports: [
      ProductService,
      TypeOrmModule,
   ]
})
export class ProductModule { }
