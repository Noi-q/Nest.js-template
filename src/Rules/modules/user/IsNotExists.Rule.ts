import { PrismaClient } from "@prisma/client";
import { registerDecorator, ValidationArguments, ValidationOptions } from "class-validator";

// 验证数据库和用户创建的帐号是否一样
export function IsNotExistsRule(
  table:string,
  validationOptions?: ValidationOptions
){
  return function (object: Record<string, any>, propertyName: string){
    registerDecorator({
      name:"IsNotExistsRule",
      target:object.constructor,
      propertyName:propertyName,
      constraints:[table],
      options:validationOptions,
      validator:{
        async validate(value: string, args: ValidationArguments){
          const prisma = new PrismaClient()
          const user = await prisma[table].findFirst({
            where:{
              [propertyName]:args.value
            }
          })
          return !Boolean(user);
        }
      }
    })
  }
}

// 验证是否有该用户
export function IsNotUserRule(
  table:string,
  validationOptions?: ValidationOptions
){
  return function (object: Record<string, any>, propertyName: string){
    registerDecorator({
      name:"IsNotExistsRule",
      target:object.constructor,
      propertyName:propertyName,
      constraints:[table],
      options:validationOptions,
      validator:{
        async validate(value: string, args: ValidationArguments){
          const prisma = new PrismaClient()
          const user = await prisma[table].findFirst({
            where:{
              [propertyName]:args.value
            }
          })
          return Boolean(user);
        }
      }
    })
  }
}

// 验证id是否存在
export function IsNotIdRule(
  table:string,
  validationOptions?: ValidationOptions
){
  return function (object: Record<string, any>, propertyName: string){
    registerDecorator({
      name:"IsNotExistsRule",
      target:object.constructor,
      propertyName:propertyName,
      constraints:[table],
      options:validationOptions,
      validator:{
        async validate(value: string, args: ValidationArguments){
          const prisma = new PrismaClient()
          const user = await prisma[table].findFirst({
            where:{
              [propertyName]:Number(args.value)
            }
          })
          return Boolean(user);
        }
      }
    })
  }
}