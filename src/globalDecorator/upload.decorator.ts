import { applyDecorators, MethodNotAllowedException, UseInterceptors } from "@nestjs/common"
import { FileInterceptor } from "@nestjs/platform-express"
import { MulterOptions } from "@nestjs/platform-express/multer/interfaces/multer-options.interface"
import location from 'src/config/modules/location'



// 类型拦截器封装
export function fileFilter(type:string){
  return (req:any, file:Express.Multer.File, callback:(error: Error | null, accpetFile: boolean)=>void)=>{
    console.warn(location().location.isDev == "development" ? file.mimetype : "")
    if(!file.mimetype.includes(type)){
      callback(new MethodNotAllowedException('文件类型不允许'), false)
    }else{
      callback(null, true)
    }
  }
}
// 封装装饰器
export function Upload(type="file", options:MulterOptions){
  return applyDecorators(UseInterceptors(FileInterceptor(type, options)))
}

// 图片上传封装
export function ImageUpload(type="file"){
  return Upload(type,{
    limits:{
      // 文件大小
      fieldSize:Math.pow(1024, 2) * 2
    },
    fileFilter:fileFilter('image')
  })
}

export function MarkdownUpload(type="file"){
  return Upload(type,{
    limits:{
      // 文件大小
      fieldSize:Math.pow(1024, 2) * 10
    },
    fileFilter:fileFilter('markdown')
  })
}