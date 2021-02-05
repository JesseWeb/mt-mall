import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { StoreEntity } from 'src/store/store.entity';
import { Repository } from 'typeorm';
import { ProductEntity } from './product.entity';

@Injectable()
export class ProductService {
   constructor(
      @InjectRepository(ProductEntity)
      private repo: Repository<ProductEntity>,
   ) { }

   findAll(): Promise<ProductEntity[]> {
      return this.repo.find();
   }

   findOne(id: number): Promise<ProductEntity> {
      return this.repo.findOne(id);
   }

   async remove(id: string): Promise<void> {
      await this.repo.delete(id);
   }

   async create(product: ProductEntity) {
      let productTobeSave = this.repo.create(product)
      return await this.repo.save(productTobeSave)
   }
}