import { ArgumentsHost, Catch, HttpException, HttpStatus, ExceptionFilter } from "@nestjs/common";
import { Response, Request } from "express";
import { logger } from '../shared/log4js'
@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
   catch(exception: HttpException, host: ArgumentsHost) {
      const ctx = host.switchToHttp()
      let response = ctx.getResponse<Response>()
      let request = ctx.getRequest<Request>()
      const status = exception instanceof HttpException ?
         exception.getStatus() : HttpStatus.INTERNAL_SERVER_ERROR;
      const logText = `Request original url: ${request.originalUrl} Method: ${request.method} IP: ${request.ip} Status code: ${status} Response: ${exception.toString()}`;
      logger.debug(logText);
      const message = exception.message ? exception.message : `${status >= 500 ? 'Service Error' : 'Client Error'}`;
      const errorResponse = {
         statusCode: status,
         data: { error: message },
         message: '请求失败',
         code: -1, // 自定义code
         url: request.originalUrl, // 错误的url地址
      };
      // 设置返回的状态码、请求头、发送错误信息
      response.status(status);
      response.header('Content-Type', 'application/json; charset=utf-8');
      response.send(errorResponse);
   }
}