# React-my-template

这是一个我喜欢的React构建项目的基础模板，特点如下：

- 用最精简的可运行代码作为开发React web项目的基础

- nodemon监控js变化自动重启服务，只需要刷新浏览器就可以同步看到你的变化
- gulp管理构建的自动化任务，取代webpack或者react-scripts
- bower管理javascript/html/css库，比如安装或者卸载bootstrap或jquery都很方便
- 服务端用babel-node启动server.js

启动方法：

我用的node版本是8.15.0，本代码用的react-router是1.x.x系列之前的即0.x.x

首先安装依赖

```
npm install
```

安装全局的nodemon命令

```
npm install -g nodemon
```

然后在根目录打开两个这段分别运行

```
npx gulp
```

```
npm run start
```

