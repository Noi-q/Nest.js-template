import {IsNotEmpty} from 'class-validator'
import { IsNotExistsRule, IsNotUserRule } from 'src/rules'
export default class LoginDto {
  @IsNotEmpty({
    message:"帐号不能为空!"
  })
  @IsNotUserRule("user",{message:"没有该用户!"})
  account: string
  @IsNotEmpty({
    message:"密码不能为空!"
  })
  password: string
}