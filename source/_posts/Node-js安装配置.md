---
title: Node.js 安装配置
date: 2018-05-23 11:13:16
tags: "Node"
categories: Node
---

![](https://i.imgur.com/NF3HLdl.png)

<!--more-->

#### Node.js 安装配置

##### 版本：node-v 10.1.0-x64.msi , 环境：windows(X64)

----------

#### Node.js

Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行环境 , Node.js 使用了一个事件驱动、非阻塞式 I/O 的模型 , 使其轻量又高效

#### Node.js 10.0.0 版本介绍

自 Node.js Foundation 开展以来的第七个主要版本 , 并将在2018年10月成为下一个 LTS 分支

新版本自带定制化的 Node-ChakraCore 引擎 , 其功能亮点包括：
1. 全面支持 N-API
2. 可轻松通过新的 Visual Studio Code Extension 进行 Time-Travel 调试
3. 支持 TTD 的生成器和异步函数
4. 支持 Inspector 协议
5. 增强稳定性和其他各种改进

同时包括以下更新：

1. N-API native addons API 已从实验状态毕业
2. Async_hooks
2.1 过时的实验性 async_hooks API 已被删除
3. Child Process
3.1 忽略未定义的 env 属性
4. Console
4.1 新增 console.table() 方法
5. Crypto
5.1 crypto.createCipher() 和 crypto.createDecipher() 方法已被弃用
并被 crypto.createCipheriv() 和 crypto.createDecipheriv() 替代
5.2 decipher.finaltol() 方法已弃用
5.3 crypto.DEFAULT_ENCODING 属性已弃用
5.4 新增 ECDH.convertKey() 方法
5.5 crypto.fips 属性已弃用
6. Dependencies
6.1 V8 已升级至 6.6 版本
6.2 OpenSSL 升级至 1.1.0h 版本

[完整更新内容请查阅发行说明]([https://nodejs.org/en/blog/release/v10.0.0/](https://nodejs.org/en/blog/release/v10.0.0/) Tips：建议梯子访问

----------

#### Windows 配置 Node.js

##### 1. windows 安装包(.msi)

[32 位安装包下载]([https://nodejs.org/dist/v4.4.3/node-v4.4.3-x86.msi](https://nodejs.org/dist/v4.4.3/node-v4.4.3-x86.msi)

[64 位安装包下载]([https://nodejs.org/dist/v4.4.3/node-v4.4.3-x64.msi](https://nodejs.org/dist/v4.4.3/node-v4.4.3-x64.msi)

##### 2. 安装

![](https://i.imgur.com/PZZWpSE.png)

点击 Run , 将出现如下界面

![](https://i.imgur.com/QDmoT90.png)

勾选接受协议选项 , 点击 next 按钮

![](https://i.imgur.com/TqGqT4F.png)

Node.js 默认安装目录为 "C:\Program Files\nodejs\" , 也可修改目录 , 并点击 next
 
![](https://i.imgur.com/eQOdhfk.png)

点击树形图标来选择安装模式 , 然后点击 next
 
![](https://i.imgur.com/A3v9rR6.png)

点击 Install 开始安装 Node.js , 也可点击 Back 来修改先前的配置 , 然后点击 next

![](https://i.imgur.com/qHorH2r.png)

安装过程

![](https://i.imgur.com/FSWUkyT.png)

点击 Finish 按钮退出安装向导

![](https://i.imgur.com/xfDQ8sI.png)

检查 Node.js 及 npm 版本

	运行 - cmd - 输入 node --version(可简写为npm -v) , npm --version

![](https://i.imgur.com/733q1Rm.png)

--------------------------------------------------------------------------------------------- EOF ----------------------------------------------------------------------------------------------------