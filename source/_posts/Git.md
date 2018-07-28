---
title: Git
date: 2018-05-23 20:40:46
tags: "Git"
categories: Git
---

![](https://i.imgur.com/lSeTvw0.jpg)

<!--more-->

#### 关于版本控制

版本控制是一种记录一个或若干文件内容变化 , 以便将来查阅特定版本修订情况的系统 , 我们对保存着软件源代码的文件作版本控制 , 但实际上 , 你可以对任何类型的文件进行版本控制 , 采用版本控制系统（VCS）是个明智的选择 ,  有了它你就可以将某个文件回溯到之前的状态 , 甚至将整个项目都回退到过去某个时间点的状态 , 你可以比较文件的变化细节，查出最后是谁修改了哪个地方 , 从而找出导致怪异问题出现的原因 , 又是谁在何时报告了某个功能缺陷等等 , 使用版本控制系统通常还意味着 , 就算你乱来一气把整个项目中的文件改的改删的删 , 你也照样可以轻松恢复到原先的状态

#### 创建分支与合并

首先创建分 dev 分支 , 然后切换到 dev 分支：
	$ git checkout -b dev
	  Switched to a new branch 'dev'

git checkout 命令加上 -b 参数表示创建并切换 , 相当于以下两条命令：
	$ git branch dev
	$ git checkout dev
	  Switched to branch 'dev'
用 git branch 命令查看当前分支：
	$ git branch
		* dev
		master
git branch 命令会列出所有分支 , 当前分支前面会标一个*号

然后在 dev 分支上正常提交 , 比如对 readme.txt 做个修改 , 加上一行：
	Creating a new branch is quick.
提交
	$ git add readme.txt 
	$ git commit -m "branch test"
		[dev b17d20e] branch test
		1 file changed, 1 insertion(+)
现在 dev 分支工作完成 , 切换回 master 分支：
	$ git checkout master
	  Switched to branch 'master'
查看 readme.txt 发现刚才添加的内容不见了 , 这是因为刚才提交的是在 dev 分支上 , 而 master 分支此刻的提交点并没发生变化 , 现在把 dev 分支的工作合并到 master 分支上

	$ git merge dev
	    Updating d46f35e..b17d20e
		Fast-forward
		readme.txt | 1 +
		1 file changed, 1 insertion(+)
git merge 命令用于合并指定分支到当前分支 , 合并后 , 再查看 readme.txt 的内容 , 就可以看到 ,和 dev 分支的最新提交是完全一样的 , 看上面 Fast-forward 信息 , Git 告诉我们 ,这次合并是“快进模式” , 也就是直接把 master 指向 dev 的当前提交 , 所以合并速度非常快 , 确认合并完成无误后 , 现在可以删除 dev 分支了
	$ git branch -d dev
	  Deleted branch dev (was b17d20e).
再来查看 branch , 发现只剩 master 了
	$ git branch
		* master
Tips：因为创建、合并和删除分支非常快 , 所以Git鼓励你使用分支完成某个任务 , 合并后再删掉分支 , 这和直接在master分支上工作效果是一样的 , 但过程更安全

#### 小结

	git branch：查看分支
	git branch <name>：创建分支
	git checkout <name>：切换分支
	git checkout -b <name>：创建+切换分支
	git merge <name>：合并某分支到当前分支
	git branch -d <name>：删除分支

--------------------------------------------------------------------------------------------- EOF ----------------------------------------------------------------------------------------------------