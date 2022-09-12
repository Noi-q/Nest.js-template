import {IsNotEmpty, isNumberString} from 'class-validator'
import { IsNotIdRule } from 'src/Rules'
export default class InfoDto {
  @IsNotEmpty({
    message:"id不能为空!"
  })
  @IsNotIdRule("user",{message:"id不存在!"})
  id: number
}