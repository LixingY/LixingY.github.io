---
title: 本地 vue 项目上传至 GitHub
date: 2018-06-07 11:10:44
tags: "vue"
categories: vue
---

![](https://i.imgur.com/JKLBcX8.png)

<!--more-->

#### 前言

> 最近初步完成了 [锤子商城支付系统](https://github.com/LixingY/smartisanpay) , 上传至 github , 并实现一个简单的预览功能 , 遇到一些问题 , 分享一下解决的过程

#### 打包 Vue 项目

Vue 项目完成时 , 执行以下命令

	npm run build 

实际上此命令就是执行 build.js 文件 , 将项目打包成静态资源 , 项目根目录下会多出一个 dist 文件夹

![](https://i.imgur.com/MQQBLwf.png)

static 文件下包括项目打包后的 css、js、img、fonts (字体图标)

#### 项目资源无法加载

但打开 dist 下 index.html 文件 , 页面却显示空白 , F12 打开控制台查看

![](https://i.imgur.com/0jPJ5U6.png)

发现并没加载任何 css、js 文件 , 解决办法如下：

打开根目录 config 下的 index.js , 找到如下代码：

![](https://i.imgur.com/SKiACMq.png)

将 `assetsPublicPath: '/'` , 改为 `assetsPublicPath: './'` 或 `assetsPublicPath: ''`

保存 , 运行 ` npm run build ` , 在新生成的 dist 下打开 index.html , 页面结构正常显示 , 但是页面字体图标和 mock 的数据无法正常加载

#### 字体图标无法加载

页面中用 background 加载的图片可以正常显示 , 但是所有的字体图标都不能正常显示 , 解决办法如下：

打开根目录 build 下的 utils.js , 找到如下代码：

![](https://i.imgur.com/Bm09B30.png)

`fallback: 'vue-style-loader'` 下添加 `publicPath: '../../'`

保存 , 运行 ` npm run build ` , 在新生成的 dist 下打开 index.html , 页面字体图标正常显示

#### Mock 数据无法正常加载

项目的绝大部分页面内容是通过在跟目录下创建的 data.json 文件渲染到页面上的 , 是模拟从后端请求数据的 , 开发调试时用 `npm run dev` 命令 , 会借助node启动一个本地服务器 , 可以正常的渲染出相应的数据。而通过打包后的项目时属于静态资源的 , 点击 index.html , 是无法加载 mock 的数据的 , 浏览器也会报跨域的错误。若想正常的加载 mock 数据 , 最好的方式是讲打包后的资源丢到服务器中 , 或者使用 jsonp 请求线上真实数据，因为它的原理是利用 script 标签来获得数据 , 在github 上是可以预览的

#### 使用 git 命令将项目上传至 github

项目文件夹内打开 Git Bash Here , 输入

	git init

把文件添加到版本库中 , 不要忘记后面的小数点"." , 添加文件夹下的所有文件

	git add .

把文件提交到仓库 , 引号内为提交说明

	git commit " update message"

关联远程库
	
	git remote add origin 仓库地址 (例如:https://github.com/LixingY/smartisanpay.git)

将项目所有 push 文件到仓库中
	
	git push -u origin master

	后期执行 git push 即可

#### github 在线预览

github 预览是需要利用 GitHub Pages , 点击项目仓库 Settings , 找到 GitHub Pages , 切换到 master branch

![](https://i.imgur.com/WfYhhSy.png)

地址生成了 , 如无法预览 , 地址后面加上 /dist 即可

#### 心得

github 作为星球上最流行的开源托管服务的分布式网站 , 作为程序员 , 掌握基本 github 使用方法 , 无论是对于分享、托管自己的项目 , 还是查阅其它优秀的开源项目 , 都是十分有帮助的

##### Tips: git 常用命令

	git init 	配置git
	git add .	更新所有文件
	git commit	提交文件至仓库
	git status	查看状态
	git diff	查看改动说明
	git remote	查看远端服务器别名 , 加上 -v 显示 url 信息
	git remote add server_url local-alias	添加远端服务器
	git clone project_url local_alias		拷贝项目到本机中
	git push server_url/local-alias			更新远端服务器仓库
	git pull server_url/local-alias			更新本地服务器仓库

--------------------------------------------------------------------------------------------- EOF ----------------------------------------------------------------------------------------------------