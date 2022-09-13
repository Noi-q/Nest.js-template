import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { PassportStrategy } from "@nestjs/passport";
import { validate } from "class-validator";
import { ExtractJwt, Strategy } from "passport-jwt";
import { PrismaService } from "src/GlobalModules/prisma/prisma.service";

@Injectable()

export class JwtStrategy extends PassportStrategy(Strategy,'jwt'){
  constructor(configService:ConfigService, private prisma: PrismaService){
    super({
      // 解析用户提交的Bearer Token header数据
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      // 加密的 secret
      secretOrKey: configService.get('secret').key
    })
  }
  // 验证通过后结果用户资料
  async validate({sub: id}){
    return this.prisma.user.findUnique({
      where: {
        id
      }
    })
  }
}