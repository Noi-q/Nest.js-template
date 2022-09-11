- ~/prisma目录结构

---- seeds              为不同表创建和添加数据文件的ts文件目录
---- schema.prisma      添加表和配置数据库的文件
---- migrations         更新和创建生成的日志sql文件
---- seed.ts            为执行文件，创建前先在package.json与"name"同级对象中添加一条执行命令
```json
"prisma":{
  "seed": "ts-node prisma/seed.ts"
}
```


- 生成数据库和创建数据库并执行添加代码
`npx prisma migrate dev`

- 字段格式多表关联代码
`npx prisma format`



- ~/.env

---- 配置DATABASE_URL数据库连接的配置地址