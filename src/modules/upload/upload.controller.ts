import { Controller, Post, UploadedFile, UsePipes } from '@nestjs/common';
import { Validate } from 'class-validator';
import { ImageUpload, MarkdownUpload } from 'src/globalDecorator/upload.decorator';
import { Auth } from '../user/decorator/authJwt.decorator';

@Controller('upload')
export class UploadController {
  
  // 图片上传
  @Post('image')
  @ImageUpload()
  @Auth()
  @UsePipes(Validate)
  image(@UploadedFile() file:Express.Multer.File){
    return file
  }

  // md上传
  @Post('document')
  @MarkdownUpload()
  @Auth()
  @UsePipes(Validate)
  markdown(@UploadedFile() file:Express.Multer.File){
    return file
  }
}
