import { Injectable } from '@nestjs/common';
import { hash, verify } from 'argon2';
import { InfoDto, LoginDto, RegisterDto } from 'src/Dto';
import { PrismaService } from 'src/GlobalModules/prisma/prisma.service';

@Injectable()
export class UserService {

  constructor(
    private prisma:PrismaService
  ){}

  async register(val:RegisterDto){
    // 注册密码加密hash
    const password = await hash(val.password)
    const user = this.prisma.user.create({
      data:{
        name:val.name,
        account:val.account,
        password
      }
    })
    return user;
  }

  async Login(val:LoginDto){
    const user = await this.prisma.user.findFirst({
      where:{
        account:val.account
      }
    })
    // 登录验证hash密码
    return await verify(user.password, val.password).then(
      res => {
        return user;
      }
    )
  }

  async Info(val:InfoDto){
    const user = await this.prisma.user.findUnique({
      where:{
        id:Number(val.id)
      }
    })
    return user;
  }
}
