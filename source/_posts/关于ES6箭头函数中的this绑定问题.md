---
title: 关于 ES6 箭头函数中的 this 绑定问题
date: 2018-05-29 15:14:22
tags: "JavaScript"
categories: JavaScript
---

![](https://i.imgur.com/oeXufoY.jpg)

<!--more-->

#### 关于 ES6 箭头函数中的this绑定问题

> 最近在看高程函数这块 , 得出一个结论 , JS 中是不存在重载的 , 但是可以通过其它方式来模拟 , 并非完美重载 , 这就想到了 arguments 这个数组了 , arguments 是系统中的一个数组 , 用来存储函数传递的参数 , 这和 Java 中写 main 方法时的 (agrs []) 类似 , 在 JS 中 , 可以用这个数组来接受函数传递过来的参数 , 从而根据不同的参数进行判断 , 从而实现不同的效果 , 这就达到了模拟重载的效果

~~好像过头了


#### 关于 This

this 指向问题一直是学习 JS 不可忽视的重要部分

##### 举个栗子

	var obj = {
        fn: function () {
            console.log(this); // {fn: ƒ}
        }
    }
    obj.fn();

很明显的 this 指向问题 , 谁调用就指向谁

##### 再来个

	var obj = {
        fn: function () {
            setTimeout((function () {
                console.log(this); // Window 
            }))
        }
    }
    obj.fn();

这次却指向最外层的 Window,为啥呢？因为这次的this出现在全局函数 setTimeout 的匿名函数里, 并没对某个对象进行显示调用 , 所以指向了 Window 对象.

##### 如果加个箭头 => 呢 ?

	var obj = {
        fn: function () {
            setTimeout(() => {
                console.log(this); // {fn: ƒ}
            })
        }
    }
    obj.fn();

好嘛 , this 又指回宿主了 , 因为箭头函数不会创建自己的 this , 它只会从自己的作用域链的上一层继承 this.

##### 好像看不出啥区别哈 , 加个变量试试
	
	var obj = {
        _num: 1,
        fn: function () {
            setTimeout(function () {
                console.log(this._num);
            })
        }
    }
    obj.fn(); // undefined

    var obj1 = {
        _num: 1,
        fn: function () {
            setTimeout(() => {
                console.log(this._num);
            })
        }
    }
    obj.fn(); // 1

显而易见 , undefined 和 1 , 没加箭头函数情况下 , 指向 Window.
而 Window 里并没有 _num 属性 , 而使用了箭头函数的情况下 , this 指向对象 obj1.

##### 没什么难度 , 来个嵌套版

	var obj = {
        _num: 1,
        fn: function () {
            var f = () ={ // Object , 指向obj , 输出1
                console.log(this);
                setTimeout(() ={ // Object , 指向obj , 输出1
                    console.log(this);
                });
            }
            f();
        }
    }
    obj.fn();

##### 如果改动外层指向呢 ?
	
	var obj = {
        _num: 1,
        fn: function () {
            var f = function () {
                console.log(this); // Window , 因为函数 f 定义后并没有对象调用
                setTimeout(() => {
                    console.log(this); // Window , 外层 this 绑定到了 Window , 内层也相当于定义在 Window , 这是个全局环境
                });
            }
            f();
        }
    }
    obj.fn();

##### 外层都改了 , 内层也改改看

	var obj = {
        _num: 1,
        fn: function () {
            var f = () ={
                console.log(this); // Object , 因为 this 定义在 obj1 对象中 , 所以指向 obj1
                setTimeout(function () {
                    console.log(this); // 依旧是 Window , 非箭头函数的情况下还是要看宿主对象是谁 , 如果没有被对象调用 , 函数体中的 this 就绑定 window 上 , 然而内层却不会影响外层 ??  
                });
            }
            f();
        }
    }
    obj.fn();


#### 总结

箭头函数的 this 绑定看的是 this 所在的函数定义在哪个对象下 , 绑定到哪个对象则 this 就指向谁 , 如有对象嵌套 , 则 this 绑定到最近的一层对象上.

--------------------------------------------------------------------------------------------- EOF ----------------------------------------------------------------------------------------------------