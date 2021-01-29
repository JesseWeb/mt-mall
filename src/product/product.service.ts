import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductEntity } from './product.entity';

@Injectable()
export class ProductService {
   constructor(
      @InjectRepository(ProductEntity)
      private productRepository: Repository<ProductEntity>,
   ) { }

   findAll(): Promise<ProductEntity[]> {
      return this.productRepository.find();
   }

   findOne(id: string): Promise<ProductEntity> {
      return this.productRepository.findOne(id);
   }

   async remove(id: string): Promise<void> {
      await this.productRepository.delete(id);
   }
}