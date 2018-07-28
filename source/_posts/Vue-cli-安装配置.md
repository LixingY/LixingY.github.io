---
title: Vue-cli 安装配置
date: 2018-05-23 12:38:10
tags: "vue"
categories: vue
---

![](https://i.imgur.com/1jfdx8K.png)

<!--more-->

#### 安装

> 使用官方推荐的 webpack [点此进入](https://github.com/vuejs/vue-cli)

> Tips：版本：node 10.1.0 , npm 5.6.0

#### 步骤

- cmd 打开命令行窗口
- 输入 npm install vue-cli -g , 然后回车等待(想在哪个目录建立 vue 项目就要在进入到对应目录再输入命令)
- 安装结束后输入 vue 如显示版本号则继续下一步操作
- 运行 vue init webpack demo (注：项目名称) 回车
- 显示 Project nanme 目录名 回车 project description 后面可以写上描述 , 或者直接回车 , Author 后面可以写作者也可以回车 
- Install vue-router? 选择Y
- 一路 n 下去
- 这个时候在你创建的目录下就有你的目录了 , 然后 cd 你的目录名进去 npm install 回车等待,这一步是安装依赖的 , 安装完成后会在项目文件夹下自动生成 node-module 文件来存放安装的依赖文件 , 如果这个文件夹没有那么项目是无法运行的
- 创建结束后在创建目录里面按住 shift+ 右键选择在此处打开命令窗口输入 npm run dev 启动应用 , 启动成功它会自动打开一个 vue 页面
- 每次这样启动是很麻烦的 , 用开发工具加载整个项目 , 里面有个 package.json , 包含整个项目的配置和信息的描述 , 里面有个 scripts , 这是定义的一些脚本，刚才用的就是里面的 dev , 它会执行后面的东西 , 就是用 node 跑一个 JSON 文件
- 在项目中 , 右击 package.json 选择 show npm scripts , 显示 npm 后 , 双击命令即可

#### main.js 介绍

> el 是挂载点 , router 是路由 , App.vue 是整个文件的入口 , 有三部分 , template 模板 、script 逻辑、style 样式

--------------------------------------------------------------------------------------------- EOF ----------------------------------------------------------------------------------------------------