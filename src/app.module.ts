import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductController } from './product/product.controller';
import { ProductService } from './product/product.service';
import { ProductModule } from './product/product.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from '../ormconfig';
import { ConfigModule } from '@nestjs/config';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { SessionModule } from './session/session.module';
import { StoreModule } from './store/store.module';
import { RoleModule } from './role/role.module';
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `../env/${process.env.NODE_ENV}.env`
    }),
    TypeOrmModule.forRoot(config), ProductModule, UserModule, AuthModule, SessionModule, StoreModule, RoleModule],
  controllers: [AppController, ProductController, UserController],
  providers: [AppService, ProductService, UserService],
})
export class AppModule { }
