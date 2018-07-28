---
title: CSS3 动画
date: 2018-07-12 12:55:19
tags: "CSS3"
categories: CSS3
---

![](https://i.imgur.com/vTb0qLn.jpg)

<!--more-->


> 最近笔试遇到两个 c3 动画题 , 记录一下

#### 桌球运动轨迹

球 A 和球 B , 静止时相隔 100px , 触发后球 A 撞向球 B , 球 B 顺势滚动并撞到屏幕后弹至原位 , 可参考桌球的运动轨迹.

分析: 题目没有说是水平/垂直方向运动 , 我就以水平方向运动吧. A -----100px----- B , 假设球 A 和球 B自身宽各 30 px , 总宽 200 px , 那么球 A 的运动值为 100 px , 球 B 的运动值为 200 - (30 * 2 + 100) = 40 px.

HTML 部分

    <div id="box">
        <div class="ball1">A</div>
        <div class="ball2">B</div>
    </div>

CSS 部分

	body{
		margin: 200px 200px;
		padding: 0;
	}

    #box{
        width: 200px;
        height: 200px;
        border: 1px solid cornflowerblue;
    }

    .ball1,.ball2{
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background-color: limegreen;
        float: left;
        line-height: 30px;
        text-align: center;
    }

    .ball2{
        margin-left: 100px;
    }

    .ball1{
        animation: go 2s;
    }

    .ball2{
        animation: goAgain 4s;
    }

    @keyframes go {
        0%{
            transform: translateX(0);
        }
        50%,51%{
            -webkit-animation: ease-in both;
            transform: translateX(100px);
        }
    }

    @keyframes goAgain {
        0%,25%{
            transform: translateX(0);
        }
        50%,60%{
            -webkit-animation: ease-in both;
            transform: translateX(40px);
        }
    }

- 主要就是两个球的过渡时间 , 其它兼容的什么没写

效果如下:

![](https://i.imgur.com/hXhIvsk.gif)


#### 摩天轮旋转动画

分析: 大致三个功能 , 一 , 球体旋转 , 二 , 座位固定位置 , 三 , 座位底部始终垂直于水平线

球体旋转很简单 , rotate(360deg) , 座位固定 position 定位 , 底部始终垂直于水平线 , 每个座位单独设置一个 animation 属性 , 逆时针 360° 旋转

HTML 部分

	<div id="sky-wheel">
        <img src="img/background.png">
        <img src="img/person1.png">
        <img src="img/person2.png">
        <img src="img/person3.png">
    </div>

CSS 部分

	#sky-wheel{
        margin: 100px auto;
        width: 800px;
        position: relative;
        animation: rotate 10s infinite linear;
	}

    @keyframes rotate { // 主球旋转
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
	
	// 结构性伪类选择器单独定位每个座位
    img:nth-child(2) {
        position: absolute;
        top: 80px;
        left: 400px;
        animation: seat 10s infinite linear;
        transform-origin: top center; // 旋转基点
    }

    img:nth-child(3) {
        position: absolute;
        top: 700px;
        left: 400px;
        animation: seat 10s infinite linear;
        transform-origin: top center;
    }

    img:nth-child(4) {
        position: absolute;
        top: 300px;
        left: 0px;
        animation: seat 10s infinite linear;
        transform-origin: top center;
    }

    @keyframes seat {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(-360deg); // 实现座位底部始终垂直于水平线
        }
    }

- 同样的 , 兼容属性没写

效果如下: 

![](https://i.imgur.com/VuEFm8R.gif)

素材来自网络 , 有时间用纯 HTML + CSS 画一个


#### 其他

还有一个很有意思的 JS 题

	if(!"a" in window) {
	    var a = 1;
	}
	alert(a); // undefined

为什么会是 undefined 呢 ?

首先所有的全局变量都是 window 的属性 , var a = 1 等价于 window.a = 1;

变量声明被提前了 , 但变量赋值没有 , 这段代码可以改写为: 

	var a;
    if (!("a" in window)) {
        a = 1;
    }
    alert(a);

先声明 a , 然后判断 a 是否在存在 , 如果不存在就赋值为 1 , 但 a 永远在 window 里 , if 语句永远不会执行 , 所以是 undefined .

--------------------------------------------------------------------------------------------- EOF ----------------------------------------------------------------------------------------------------