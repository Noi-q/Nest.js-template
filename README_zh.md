<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">渐进 <a href="http://nodejs.org" target="_blank">Node.js</a> 框架，用于构建高效和可扩展的服务器端应用程序。</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>



## 项目目录结构

```
Nest.js-template
├── LICENSE
├── nest-cli.json
├── package.json
├── package-lock.json
├── prisma
│   ├── migrations
│   │   ├── 20220911153504_user
│   │   │   └── migration.sql
│   │   └── migration_lock.toml
│   ├── README.md
│   ├── schema.prisma
│   └── seed.ts
├── README.md
├── README_zh.md
├── src
│   ├── app.controller.ts
│   ├── app.module.ts
│   ├── app.service.ts
│   ├── config
│   │   ├── index.ts
│   │   ├── modules
│   │   │   └── location.ts
│   │   └── README.md
│   ├── Dto
│   │   ├── index.ts
│   │   ├── modules
│   │   │   └── user
│   │   │       ├── info.dto.ts
│   │   │       ├── login.dto.ts
│   │   │       └── register.dto.ts
│   │   └── README.md
│   ├── filters
│   │   ├── README.md
│   │   └── validate.filter.ts
│   ├── GlobalModules
│   │   ├── prisma
│   │   │   ├── prisma.module.ts
│   │   │   ├── prisma.service.ts
│   │   │   └── README.md
│   │   └── README.md
│   ├── main.ts
│   ├── modules
│   │   ├── modules.module.ts
│   │   ├── README.md
│   │   └── user
│   │       ├── user.controller.ts
│   │       ├── user.module.ts
│   │       └── user.service.ts
│   ├── Pipe
│   │   ├── README.md
│   │   └── validate.ts
│   ├── README.md
│   ├── Rules
│   │   ├── index.ts
│   │   ├── modules
│   │   │   └── user
│   │   │       └── IsNotExists.Rule.ts
│   │   └── README.md
│   └── types
│       ├── index.ts
│       ├── modules
│       │   └── config.ts
│       └── README.md
├── test
│   ├── app.e2e-spec.ts
│   └── jest-e2e.json
├── tsconfig.build.json
├── tsconfig.json
└── yarn.lock
```
- 注:每个src下的目录文件都有README文档说明


## 下载

```bash
yarn install
```

## 运行

```bash
# development
yarn run start

# watch mode
yarn run start:dev

# production mode
yarn run start:prod
```


## .env-template

- 连接数据库请在 .env-template 文件里修改,修改之前，请把文件名重命名为 .env