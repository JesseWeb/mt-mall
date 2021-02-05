import { Body, Controller, Get, Post, Put, Query } from '@nestjs/common';
import { UserEntity } from 'src/user/user.entity';
import { CreateStoreDto } from './dto/createStore.dto';
import { RelateToProductDto } from './dto/relateToProduct.dto';
import { StoreEntity } from './store.entity';
import { StoreService } from './store.service';

@Controller('store')
export class StoreController {
   constructor(private StoreService: StoreService) { }
   @Post()
   async createStore(@Body() body: CreateStoreDto) {
      return await this.StoreService.createStore(body)
   }
   @Put(`relate_to_product`)
   async relateToProduct(@Body() body: RelateToProductDto) {
      return await this.StoreService.relate(body.storeId, body.productId)
   }
   @Get()
   async getStore(@Query() query) {
      return await this.StoreService.findOneById(query.id)
   }
}
