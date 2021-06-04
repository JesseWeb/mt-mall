import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { logger } from './log4js';
@Injectable()
export class TransformInterceptor implements NestInterceptor {
  public intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const req = context.switchToHttp().getRequest()
    return next.handle().pipe(
      map(data => {
        const logFormat = `
          Request original url: ${req.originalUrl}
          Method: ${req.method}
          IP: ${req.ip}
          User: ${JSON.stringify(req.session.user)}
          Response data: ${JSON.stringify(data)}
         `;
        logger.info(logFormat);
        return {
          data,
          code: 0,
          message: 'success',
        };
      }),
    );
  }
}