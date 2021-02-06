import { Inject, Injectable, Query } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Store } from 'express-session';
import { BaseProvider } from 'src/core/baseProvider';
import { ProductService } from 'src/product/product.service';
import { Repository } from 'typeorm';
import { StoreEntity } from './store.entity';

@Injectable()
export class StoreService extends BaseProvider {
   constructor(@InjectRepository(StoreEntity) private repo: Repository<StoreEntity>, private readonly productService: ProductService) {
      super()
   }
   async createStore(user: StoreEntity) {
      let userTobeSave = this.repo.create(user)
      return await this.repo.save(userTobeSave)
   }
   async relate(storeId: number, productId: number) {
      let store = await this.findOneById(storeId)
      let product = await this.productService.findOne(productId)
      store.products = store.products || []
      store.products.push(product)
      return await this.repo.save(store)
   }
   async findOneById(id: number) {
      return this.repo.createQueryBuilder('store').where({
         id
      }).select([`store.id`, `store.name`, 'products.id', 'products.name']).leftJoin('store.products', 'products').getOne()
   }
}

