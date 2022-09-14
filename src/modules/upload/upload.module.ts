import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { UploadController } from './upload.controller';

@Module({
  imports:[
    MulterModule.registerAsync({
      useFactory(){
        return {
          storage: diskStorage({
            // 文件存储位置
            destination:'uploads',
            // 文件名控制
            filename:(req, file, callback)=>{
              const path = Date.now() + '-' + Math.round(Math.random() * 1e10) + extname(file.originalname)
              callback(null, path)
            }
          })
        }
      }
    })
  ],
  controllers: [UploadController]
})
export class UploadModule {}
