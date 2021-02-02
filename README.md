### Nest骨架

#### 使用说明

1) clone后创建env文件夹，根据需要在根目录创建`env/dev.env` `env/prod.env`文件(有需要可按自己需求创建多个)
在对应的环境文件中添加
```
DB_PWS=你的数据库密码
SESSION_SECRET=please_enter_your_own_secret
```

2) 执行 `npm install` 或 `yarn`安装依赖


3) 开启开发者模式 `npm run start:dev` 


#### Hint
ormconfig.ts中可对数据库进行相关设置，参考 [TypeORM](https://typeorm.io/#/using-ormconfig/using-ormconfigjs)


