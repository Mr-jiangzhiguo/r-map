# 多工程按需打包(mpp)

## 背景:
1. 多个工程
2. 工程之间业务类似但联系性弱
3. 有公共部分
4. ...

最明显的例子就是h5活动页,不定期会新增活动,活动之间有没有啥业务联系,基础工程又类似,不能每新增一个活动就新起一个工程,故搭建了此工程,用来按需打包构建指定的工程.

---
## 目录
`tree  -C -L 5 -I 'node_modules|__*|dist|.idea'`
```
.
├── LICENSE
├── README.md
├── build
│   ├── webpack.analyzer.conf.js
│   ├── webpack.base.conf.js
│   ├── webpack.dev.conf.js
│   ├── webpack.prod.conf.js
│   └── webpack.rules.conf.js
├── config
│   ├── analyzer.js
│   ├── build.js
│   ├── dev.js
│   ├── project.js
│   └── projectConfig.js
├── package-lock.json
├── package.json
└── src
    ├── components
    │   └── ErrorBoundary.js
    ├── project
    │   ├── app1
    │   │   ├── app.js
    │   │   ├── app.less
    │   │   ├── assets
    │   │   │   └── share-hi.png
    │   │   ├── document.html
    │   │   └── pages
    │   │       ├── Index.js
    │   │       ├── Questions.js
    │   │       └── components
    │   ├── app2
    │   │   ├── app.js
    │   │   ├── app.less
    │   │   ├── assets
    │   │   ├── document.html
    │   │   └── pages
    │   └── document.html
    ├── public
    │   └── favicon.ico
    ├── services
    │   └── androidBackService.js
    ├── style
    │   └── base-mediaquery.less
    └── utils
        ├── NDB.js
        ├── index.js
        └── rem.js
```
==ps: 编辑器请安装eslint和prettier插件==
## 本地开发
1. `git clone git@github.com:Mr-jiangzhiguo/r-mpp.git`
2. `cd r-mpp`
3. `npm i`
4. `npm run pre-dev app1`
5. `http://localhost:8090`

## 打包构建
`npm run pre-build app1`

## 依赖分析
`npm run pre-analyz app1`
