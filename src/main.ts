import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';

async function bootstrap() {
  // app注册
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  // 文件上传静态资源访问路径配置
  app.useStaticAssets('uploads',{prefix:'/uploads'})
  // 启动端口配置
  await app.listen(3000);

  // 检测当前启动的端口
  await app.getUrl().then(
    res =>{
      console.error(`你当前启动的服务器为：\n127.0.0.1:${res.split("http://[::1]:")[1]}\nlocalhost:${res.split("http://[::1]:")[1]}`)
    }
  )
}
bootstrap();
