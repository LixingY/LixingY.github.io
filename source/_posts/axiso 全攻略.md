---
title: axios 全攻略
date: 2018-05-26 11:42:45
tags: "axios"
categories: axios
---

![](https://i.imgur.com/iQgsjao.png)

<!--more-->

#### axios

vue 更新到 2.0 之后 , 作者就宣告不再对 vue-resource 更新 , 而是推荐 axios , axios 被越来越多的人所了解 , 看了下 axiso 官方文档 , [点此查看](https://www.npmjs.com/package/axios) , 很详细 , 有这个还要什么自行车！

#### 简介

axios 是一个基于 Promise , 用于浏览器和 node 的 HTTP 客户端，它本身具有以下特征：

- 浏览器端发起 XMLHttpRequests 请求
- node 端发起 http 请求
- 支持 Promise API
- 拦截请求和响应
- 转换请求和响应数据
- 取消请求
- 自动转换 JSON 数据
- 客户端支持防止 CSRF/XSRF

什么是 [CSRF/XSRF](https://www.owasp.org/index.php/CSRF) ?

#### 安装

使用 npm

	npm i axiso

使用 bower

	bower instal axios

使用 淘宝镜像

	cnpm install axios

使用 cdn

	<script src="https://unpkg.com/axios/dist/axios.min.js"></script>

引入
	
	import axiox from 'axios

接下来就可以使用它跟后端交互了

#### GET

	axios({
		url:'/',  // 这里填后端接口地址
		method:'get', // 请求方式 , 默认是get , 可不声明
		params:{test:'testData'}  // 参数 , 有就填 , 无则省去
		}).then( res => {
		// 具体操作
			console.log(res)
			}).catch( err => {
				// 异常操作
	})

#### POST

	axios({
		url:'/',  // 这里填后端接口地址
		method:'post',   
		data:{test:'testData'}, 
		 // 参数 , 有就填 , 无则省去 , 需要注意下 , 使用post请求 , 属性要用 data , 
		本来这样是可以了 , 但后端需要用 json 格式 , 这时还需要加 "transformRequest" 属性
		对请求数据进行格式化
		transformRequest:function(obj) {
			var str = [];
			for ( var p in obj) {
				str.push(encodeURIComponent(p) + "="
				+ encodeURIComponent(obj[p]));
			}
			return str.join("&");
		}
		}).then(res => {
			// 具体操作
			console.log(res)
		}).catch(err => {
			// 异常操作
		})

--------------------------------------------------------------------------------------------- EOF ----------------------------------------------------------------------------------------------------