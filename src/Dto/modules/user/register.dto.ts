import {IsNotEmpty} from 'class-validator'
import { IsNotExistsRule } from 'src/rules'
export default class RegisterDto {
  @IsNotEmpty({
    message:"用户名不能为空!"
  })
  @IsNotExistsRule('user',{message:"用户名已存在!"})
  name: string
  
  @IsNotEmpty({
    message:"帐号不能为空!"
  })
  account: string

  @IsNotEmpty({
    message:"密码不能为空!"
  })
  password:string
}