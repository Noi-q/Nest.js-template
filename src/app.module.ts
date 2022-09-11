import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import config from './config/index'
import { Modules } from './modules/modules.module';

@Module({
  imports: [
    // 全局配置文件
    ConfigModule.forRoot({
      isGlobal:true,
      load:[...config]
    }),
    // Modules全局模块
    Modules
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
