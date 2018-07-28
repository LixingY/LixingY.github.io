---
title: 简述 var/let/const 三者区别
date: 2018-06-04 14:28:24
tags: "JavaScript"
categories: JavaScript
---

![](https://i.imgur.com/rgGca0Y.jpg)


<!--more-->

#### var

> 先来看看 MDN 的定义

**The variable statement declares a variable, optionally initializing it to a value.**

声明变量并初始化 , 作用域是函数体的全部

    {
		var a = 1;
		let b = 2;
	}
	console.log(a); // a is not defined
	console.log(b); // 2

var： 变量提升(无论声明在何处 , 都会被提至其所在作用于的顶部)
let： let绑定不受变量提升的约束 , 这意味着let声明不会被提升到当前执行上下文的顶部。在块中的变量初始化之前 , 引用它将会导致 ReferenceError (而使用 var 声明变量则恰恰相反，该变量的值是 undefined) , 该变量处于从块开始到初始化处理的“暂存死区”

	function fn(){
		console.log(x); // undefined
		console.log(y); // undefined
		var x = 1;
		var y = 2;
	}
	fn();

执行 fn 过程：
- 进入 fn 并创建环境
- 找到 fn 中所有用 var 声明的变量 , 在这个环境中「创建」这些变量
- 将这些变量「初始化」为 undefined
- 开始执行代码
- 分别将 x / y 赋值为 1 / 2

也就是说 var 声明会在代码执行之前就将「创建变量 , 并将其初始化为 undefined」

#### let

> 先来看看 MDN 的定义

**The let statement declares a block scope local variable, optionally initializing it to a value.**

声明块级作用域变量 , 作用域只是外层块 , 而不是整个外层函数

	{
		console.log(x); // Uncaught ReferenceError: x is not defined
		let x = 1
			x = 2;
	}

执行 {} 里过程：

- 找到所有用 let 声明的变量 , 在环境中「创建」这些变量
- 开始执行代码(注意并没初始化)
- 执行 x = 1 , 将 x 「初始化」为 1
- 执行 x = 2 , 对 x 进行「赋值」

----------

	let x = 'global';
	{
		console.log(x); // Uncaught ReferenceError: x is not defined
		let x = 1;
	}
两个原因：

- console.log(x) 中的 x 指的是下面的 x , 而不是全局的 x
- 执行 log 时 x 还没「初始化」 , 所以不能使用(也就是所谓的暂时死区)


#### const
> 先来看看 MDN 的定义

**    Constants are block-scoped, much like variables defined using the let statement.**
**	The value of a constant cannot change through re-assignment, and it can't be redeclared**

const 是块级作用域 , 类似于 let , 但不同之处在于 const 不能通过重新赋值来改变 , 也不能重新声明

仅从字面上理解也是不够的 , 它所不能修改的是栈内存在的值和地址

什么是栈内存在的值和地址呢？

基本类型 Boolen , Number, String 是把直接值直接存在栈内

引用类型 Object (Function, Array ....) 是把值存在对应的地址中

	const a = new String('123') ;
		  a = '456';
	console.log(a); // TypeError: Assignment to constant variable.

const 和 let 其实就一个区别 , const 只有「创建」和「初始化」 , 没有「赋值」过程

--------------------------------------------------------------------------------------------- EOF ----------------------------------------------------------------------------------------------------