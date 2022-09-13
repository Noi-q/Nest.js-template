import { Body, Controller, Get, Post, UsePipes } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { RegisterDto,LoginDto, InfoDto } from 'src/Dto';
import { Validate } from 'src/pipe/validate';
import { Auth } from './decorator/authJwt.decorator';
import { UserService } from './user.service';

@Controller('user')
export class UserController {

  prisma: PrismaClient
  constructor(
    private readonly userService:UserService
  ){
    this.prisma = new PrismaClient()
  }

  @Get()
  index(){
    return "dd"
  }

  /**
   * 注册
   * @UsePipes  使用管道，注意：使用管道的方法有很多种
   */
  @Post('register')
  @UsePipes(Validate)
  Register(@Body() body:RegisterDto){
    return this.userService.register(body)
  }

  /**
   * 登录
   */
  @Post('login')
  @UsePipes(Validate)
  Login(@Body() body:LoginDto){
    return this.userService.Login(body)
  }

  /**
   * 用户信息
   * @Auth 自定义JWT装饰器验证
   */
  @Post('info')
  @Auth()
  @UsePipes(Validate)
  Info(@Body() body:InfoDto){
    return this.userService.Info(body)
  }
}
