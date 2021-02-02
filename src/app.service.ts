import { Injectable } from '@nestjs/common';
import { BaseProvider } from './core/baseProvider';

@Injectable()
export class AppService extends BaseProvider {
  getHello(): string {
    this.logger.info('hahaha')
    return 'Hello World!';
  }
}
