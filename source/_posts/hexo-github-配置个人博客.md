---
title: hexo + github 配置个人博客
date: 2018-06-26 14:39:51
tags: "hexo"
categories: hexo
---

![](https://i.imgur.com/ZroHVJY.png)

<!--more-->

#### hexo + github 搭建博客

----------

#### 注册 github

[https://github.com/join?source=header-home](https://github.com/join?source=header-home)


![](https://i.imgur.com/7eNNiX9.png)

用户名 - 邮箱 - 密码 , 下一步


#### 新建仓库

![](https://i.imgur.com/JmIqIvg.png)

点击 new repository 新建仓库
 
#### 新建项目

![](https://i.imgur.com/njPJnOl.png)

#### GitHub Pages

setting 页面设置 gh-pages (一般都是默认开启)

![](https://i.imgur.com/oq30p20.png)

![](https://i.imgur.com/k8K3bOT.png)

地址栏输入上面的地址 , 不出意外的话大功告成了

----------

#### 配置 git

[https://github.com/git-for-windows/git/releases/download/v2.17.0.windows.1/Git-2.17.0-64-bit.exe](https://github.com/git-for-windows/git/releases/download/v2.17.0.windows.1/Git-2.17.0-64-bit.exe)

![](https://i.imgur.com/9DZv6Xh.png)

- 安装成功后 , 桌面空白处右键 , 不出意外能看到新增两个 git 命令

![](https://i.imgur.com/mjg67e1.png)

- 安装完成 , 还需要进一步配置 , 点击 Git Bash Here

	git config --global user.name "Your Name" /* 用户名 */
	git config --global user.email "email@example.com" /* 邮箱 */
	/* git config命令的--global参数 , 用了这个参数 , 表示你这台机器上所有的Git仓库都会使用这个配置 , 当然也可以对某个仓库指定不同的用户名和Email地址 */

#### 配置 Node

- 参考 Node 配置

#### 配置 Hexo

#### 安装 hexo

	npm install hexo-cli -g

如果 npm 安装进度很慢 , 证明你被 GFW 看上了 , 推荐使用淘宝镜像

![](https://i.imgur.com/4HT6i8a.png)

#### 初始化 blog

- 你可以在硬盘任何一个分区 , 只要你喜欢 , 新建一个文件夹来管理你的 blog , 然后在这个文件夹内 , 右键打开 git base here , 就是这么神奇 , 哪里都有它

- 检测 hexo 是否安装成功

	hexo -v (-v 不行则换成 -version)

- 初始化 hexo

	hexo init
	npm install 或 cnpm install (淘宝镜像)

- 打开 hexo
	
	hexo g
	hexo s
	
	// 提示信息 `INFO Hexo is running at http://0.0.0.0:4000/. Press Ctrl+C to stop.` 证明 ok 了
	
- 浏览器地址栏输入 `http://localhost:4000` , 你将会看到以下

![](https://i.imgur.com/YTjl113.png)

- blog 搭建完成

#### 对接 github

- 如果换了环境呢(公司或家里)
	- 新建一个 hexo 分支(branches)

![](https://i.imgur.com/hErwYv7.png)

- 这个分支就是用来放置 hexo 的核心源文件的！

- bolg 文件内右键打开 git base here , 如果你的文件正确的话 , 现在是没有 .git 文件 , 这是个隐藏文件夹 , 有的小伙伴没有设置怎么查看隐藏文件 , 不会的可以根据你的系统去 google 一下(拒绝面向百度编程)

    1. git init  // 初始化本地仓库 , 会生成一个 .git 文件
    2. git add source scaffolds themes .gitignore _config.yml package.json // 将这 6 个文件提交到 hexo 分支 , 这就是源文件了 , source 里面就是装的你的博客文章
    3. git commit -m "Blog Source Hexo"
    4. git branch hexo  // 新建 hexo 分支
    5. git checkout hexo  // 切换到 hexo 分支上
    6. git remote add origin https://github.com/xxx/xxx.github.io.git(换成你自己的 , 如下图)  // 将本地与 Github 项目对接 , 很多教程说要用 ssh , 我这里用 https 也没有出错
    7. git push origin hexo  // push 到 Github 项目的 hexo 分支上

![](https://i.imgur.com/7k7iKbQ.png)

- 提交完成之后 , 你可以在 github 上的厂库里看到

![](https://i.imgur.com/k0JfyQk.png)

- 将博客文章提交到 master 页面

- 在你博客文件夹中找到 _config.yml 文件 , 修改以下几处 (文末附上其他配置信息介绍)

    	# Site
			title: # 博客名
			subtitle: # 副标题
			description:  # 描述
			author: # 作者
			language: zh-Hans # 语言

		deploy: 
		  type: git
		  repository: https://github.com/xxx/xxx.github.io.git (换成你自己的)
		  branch: master

- 然后执行以下命令

	hexo g
	hexo d

- 现在可以再打开 yourname.github.io 看看 , 不出意外成功了

#### 换了电脑之后怎么弄

- 首先保证新电脑上 git / node.js / github 都要有

	1. git clone -b hexo https://github.com/xxx/xxx.github.io.git  // 将 Github 中hexo 分支 clone 到本地
	2. cd  yourname.github.io  //切换到刚刚 clone 的文件夹内
	3. npm install    // 注意 , 这里一定要切换到刚刚 clone 的文件夹内执行 , 安装必要的所需组件 , 不用再 init
	4. npm install -g hexo-cli // 如果电脑上没有安装这个 , 需要先安装
	5. hexo new post "new blog name"   // 新建一个 .md 文件 , 并编辑完成自己的博客内容
	6. git add source  //经测试每次只要更新 sorcerer 中的文件到 Github 中即可 , 因为只是新建了一篇新博客
	7. git commit -m "XX"
	8. git push origin hexo  // 更新分支
	9. hexo d -g   // push 更新完分支之后将自己写的博客对接到自己搭的博客网站上 , 同时同步了 Github 中的 master

如果 hexo d -g 没有生效

执行以下命令

	hexo g
	hexo d

如果有多个电脑在用 , 每次写了 blog 在其他电脑上执行

	git pull origin hexo

#### 完整配置信息

	# Site #站点信息
		title: blog Name #标题
		subtitle: Subtitle #副标题
		description: my blog desc #描述
		author: me #作者
		language: zh-CN #语言
		timezone: Asia/Shanghai #时区
		    
	# URL
		url: http://yoururl.com   #用于绑定域名, 其他的不需要配置
		root: /

	# permalink: :year/:month/:day/:title/

		permalink: posts/title.html
		permalink_defaults:
		    
	# Directory #目录

		source_dir: source #源文件
		public_dir: public #生成的网页文件
		tag_dir: tags #标签
		archive_dir: archives #归档
		category_dir: categories #分类
		code_dir: downloads/code
		i18n_dir: :lang #国际化
		skip_render:
		
	# Writing #写作

		new_post_name: :title.md #新文章标题
		default_layout: post #默认模板(post page photo draft)
		titlecase: false #标题转换成大写
		external_link: true #新标签页里打开连接
		filename_case: 0
		render_drafts: false
		post_asset_folder: false
		relative_link: false
		future: true
		highlight: #语法高亮
		  enable: true
		  line_number: true #显示行号
		  auto_detect: true
		  tab_replace:
		
	# Category & Tag #分类和标签

		default_category: uncategorized #默认分类
		category_map:
		tag_map:
		
	# Date / Time format #日期时间格式
	## http://momentjs.com/docs/#/displaying/format/

		date_format: YYYY-MM-DD
		time_format: HH:mm:ss
		
	# Pagination #分页

		per_page: 10 #每页文章数, 设置成 0 禁用分页
		pagination_dir: page
		
	# Extensions #插件和主题

	## 插件: http://hexo.io/plugins/
	## 主题: http://hexo.io/themes/
		theme: next
		
	# Deployment #部署, 同时发布在 GitHub 和 GitCafe 上面

		deploy:
		- type: git
		  repo: git@gitcafe.com:username/username.git,gitcafe-pages
		- type: git
		  repo: git@github.com:username/username.github.io.git,master
		
	# Disqus #Disqus评论系统

		disqus_shortname: 
		
		plugins: #插件，例如生成 RSS 和站点地图的
		- hexo-generator-feed
		- hexo-generator-sitemap

#### 常用命令

- `hexo new "我的第一篇博客"` // 创建 .md 文档格式的博客
- `hexo new page home` // 创建分类
- `hexo g` // 更新至本地服务器
- `hexo d` // 更新至 github
- `hexo s` // 运行 hexo

#### Tips

- 创建分类例如 tags , 如你新建的文档是要归属于 tags 类名 之下 , 则在 md 文件表示为

	tags: "vue" // 类别
	categories: vue

--------------------------------------------------------------------------------------------- EOF ----------------------------------------------------------------------------------------------------