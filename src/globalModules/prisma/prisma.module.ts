import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

// 开启全局模式
@Global()
@Module({
  providers: [PrismaService],
  exports: [PrismaService]
})
export class PrismaModule {}
