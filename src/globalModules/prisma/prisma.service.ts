import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient {
  constructor(
    private readonly config:ConfigService
  ){
    // 数据库操作日志获取
    super(config.get('location').isDev == "development" ? {log:['query']} : {})
  }
}
