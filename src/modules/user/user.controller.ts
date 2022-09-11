import { Body, Controller, Get, Post, UsePipes } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { RegisterDto,LoginDto } from 'src/Dto';
import { Validate } from 'src/Pipe/validate';
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
    return this.prisma.user.create({
      data:{
        name:body.name,
        account:body.account,
        password:body.password
      }
    })
  }

  /**
   * 登录
   */
  @Post('login')
  @UsePipes(Validate)
  Login(@Body() body:LoginDto){
    // 查询数据库
    return this.prisma.user.findFirst({
      where:{
        account:body.account,
        password:body.password
      }
    }).then(
      res =>{
        // 返回服务
        return this.userService.Login(res)
      }
    )
  }
}
