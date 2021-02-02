import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import ExpressSession from "express-session";
import { SessionEntity } from './session/session.entity';
import { getRepository } from 'typeorm';
import { TypeormStore } from 'connect-typeorm/out';
import { HttpExceptionFilter } from './shared/httpException.filter';
import { TransformInterceptor } from './shared/transform.interceptor';
import { ValidationPipe } from './pipe/validation.pipe';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(ExpressSession({
    secret: process.env.SESSION_SECRET,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7
    },
    resave: false,
    saveUninitialized: false,
    store: new TypeormStore({
      cleanupLimit: 2,
      limitSubquery: false, // If using MariaDB.
      ttl: 86400,
    }).connect(getRepository(SessionEntity))
  }))
  app.useGlobalFilters(new HttpExceptionFilter())
  app.useGlobalInterceptors(new TransformInterceptor());
  app.useGlobalPipes(new ValidationPipe())
  await app.listen(3000);

}
bootstrap();
