import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductModule } from 'src/product/product.module';
import { ProductService } from 'src/product/product.service';
import { StoreController } from './store.controller';
import { StoreEntity } from './store.entity';
import { StoreService } from './store.service';

@Module({
  imports: [TypeOrmModule.forFeature([StoreEntity]),ProductModule],
  controllers: [StoreController],
  providers: [StoreService],
  exports:[TypeOrmModule]
})
export class StoreModule { }
