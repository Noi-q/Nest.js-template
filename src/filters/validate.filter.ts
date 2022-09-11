import { ArgumentsHost, BadRequestException, Catch, ExceptionFilter, HttpStatus } from '@nestjs/common';

// 过滤器
@Catch()
export class ValidateExceptionFilterFilter<T> implements ExceptionFilter {
  catch(exception: T, host: ArgumentsHost) {
    const ctx = host.switchToHttp()
    const res = ctx.getResponse()
    if(exception instanceof BadRequestException){
      const resObject = exception.getResponse() as any;
      return res.status(HttpStatus.UNPROCESSABLE_ENTITY).json({
        code:HttpStatus.UNPROCESSABLE_ENTITY,
        message:resObject.message.map(error=>{
          const info = error.split(':')
          return { filed: info[0], message: info[1]}
        })
      })
    }
    return res;
  }
}