---
title: JS 数组遍历
date: 2018-07-06 16:26:51
tags: "JavaScript"
categories: JavaScript
---

![](https://i.imgur.com/BYhsD5a.jpg)

<!--more-->


#### JS数组遍历的几种方式

> JS 数组遍历 , 基本就是 for、forin、foreach、forof、map 等等一些方法


##### 普通 for 循环

    for(i = 0; i < arr.length; j++) {

	};

最简单的一种 , 使用频率相当高 , 虽然性能不弱 , 但仍有优化空间


##### 强版 for 循环

	for(i = 0,len = arr.length; i < len; i++) {
   
	};

使用临时变量 , 将长度存储 , 防止重复获取长度 , 只有数组较大的时候才会比普通 for 循环效果明显

##### 弱版 for 循环
	
	for(i = 0; arr[i] != null; j++) {
   
	};

这种方法好像不是很常见 , 其实我压根就没见人用过 , 不过严格意义说这也算 for 循环 , 只不过不是判断 length , 而是判断变量本身

**看起来好像比普通 for 循环的性能要小**

##### for...each 循环

	arr.forEach(function(e){  
	   
	});

数组自带方法 , 使用频率也很高 , 但性能还不如普通 for 循环


##### for...each 循环 2.0 版

	Array.prototype.forEach.call(arr,function(el){  
   
	});

for...each 是 Array 自带的方法 , 实际性能要比普通 for...each 弱

##### for...in 循环

	for(i in arr) {
   
	};

感觉用这个的最多 , 但其实 , 这个是效率最低的

##### map 遍历

	arr.map(function(n){  
   
	});

感觉这个很优雅 , 但它的性能还不如 for...each

##### for...of 遍历(ES6 新增)

	for(let value of arr) {  
	   
	});
这种方式是 ES6 里面的 , 性能要好于 for...in , 但仍然比不上普通 for 循环

### 各种遍历方式的性能对比

**普通 for 循环才是最优雅的**

--------------------------------------------------------------------------------------------- EOF ----------------------------------------------------------------------------------------------------