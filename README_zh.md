- .prettierrs 文件为代码格式化规范文件
- tsconfig.build.json 文件为ts打包配置文件
- tsconfig.json 文件为ts运行规范配置文件
- .env 数据库配置文件，也可以配置其他内容
- .eslintrc.js 文件为es代码检查规范配置文件
- .gitignore 文件为拒绝上传的git仓库的配置文件
- test 测试目录
- src 代码运行目录
- prisma 数据库配置目录
- dist 打包文件
- 注:每个src下的目录文件都有README文档说明


## 下载

```bash
$ yarn install
```

## 运行

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```