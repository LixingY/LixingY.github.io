---
title: 修复 windows10 Microsoft Store 丢失问题
date: 2018-05-24 09:30:34
tags: "windows"
categories: windows
---

![](https://i.imgur.com/3BwBGj4.jpg)

<!--more-->

#### 打开 Windows PowerShell(管理员) 或 命令提示符(管理员)

输入 `Get-AppxPackage *WindowsStore* | Remove-AppxPackage`

<!--more-->

![](https://i.imgur.com/FusBwqP.png)


此时可以看到任务栏和开始屏幕里的应用商店图标均已消失

![](https://i.imgur.com/9nVeYYp.png)

接着回到命令窗口输入 Get-AppxPackage -AllUsers| Foreach {Add-AppxPackage -DisableDevelopmentMode -Register "$($_.InstallLocation)\AppXManifest.xml"} , 同时并打开防火墙

![](https://i.imgur.com/FOVUUzs.png)

![](https://i.imgur.com/GhI87Qs.png)

图中红色标注的信息是因为现在安装的版本没有系统的版本高~ , 并不影响安装

![](https://i.imgur.com/hJCSePK.png)

ok , 应用商店图标已经出现 , 问题解决

#### 安装 Microsoft Store 应用

#### 打开 windows update 服务

##### 两种方法

- Windows PowerShell(管理员) 或 命令提示符(管理员) 输入 services.msc

Tips：.msc (Microsoft Snap-In Control) 命令是微软管理控制台 MMC (Microsoft Management Console) 用来添加/删除的嵌入式管理单元文件 , 通常通过MMC来管理 , 可以点击开始/运行 , 然后输入下列文件名就可以打开相应的控制窗口,常见的有：diskmgmt.msc (磁盘管理器 , 可以修改盘符 , 格式化和分区) , gpedit.msc (组策略管理器 , 功能强大) , services.msc (各项本地服务管理器)

- 计算机右键 - 管理 - 服务和应用程序 - 服务

![](https://i.imgur.com/snsfYu3.png)

找到 Windows Update - 右键属性 - 启动类型 - 自动 , 同时点击下面的服务状态为启动 , 接着打开防火墙

![](https://i.imgur.com/7vIOjcL.png)

--------------------------------------------------------------------------------------------- EOF ----------------------------------------------------------------------------------------------------