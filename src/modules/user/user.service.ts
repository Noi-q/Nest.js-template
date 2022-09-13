import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { user } from '@prisma/client';
import { hash, verify } from 'argon2';
import { InfoDto, LoginDto, RegisterDto } from 'src/Dto';
import { PrismaService } from 'src/globalModules/prisma/prisma.service';

@Injectable()
export class UserService {

  constructor(
    private prisma:PrismaService,
    private jwt:JwtService
  ){}

  // 获取token
  async token({account,id}:user){
    return {
      token:await this.jwt.signAsync({
        account,
        sub:id
      })
    }
  }

  // 注册
  async register(val:RegisterDto){
    // 注册密码加密hash
    const password = await hash(val.password)
    const user = await this.prisma.user.create({
      data:{
        name:val.name,
        account:val.account,
        password
      }
    })
    return this.token(user);
  }

  // 登录
  async Login(val:LoginDto){
    const user = await this.prisma.user.findFirst({
      where:{
        account:val.account
      }
    })
    // 登录验证hash密码
    return await verify(user.password, val.password).then(
      res => {
        return this.token(user);
      }
    )
  }

  // 用户信息
  async Info(val:InfoDto){
    const user = await this.prisma.user.findUnique({
      where:{
        id:Number(val.id)
      }
    })
    return user;
  }
}
