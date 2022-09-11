import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  Login(val){
    console.log(val)
    if(val == null){
      return "帐号或密码错误!"
    }else{
      return "登录成功!"
    }
  }
}
