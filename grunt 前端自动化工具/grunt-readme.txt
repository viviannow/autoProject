
grunt 前端自动化工具  【框架和工具】

前端集成解决方案

	1：解决前端工程的根本问题

	2：一套包含框架和工具，便于开发者快速构建美丽实用的web应用程序的工作流，同时这套工作流必需是稳健强壮的

----------------------------------
可已解决问题：

	1强制开发规范

	2组件库的维护和使用

	3模块化前端项目

	4服务器部署前的压缩，检查流程如何简化，流程如何完善


-------------------------------

前端集成解决主流方式有：

Yeoman

Bower

Grunt||Gulp

------------------------------------
CodeKit [只支持mac平台]可在本地，

FIS 百度

Spirit

-------------------

Grunt定位： [ 同类 ：buildy jasy gmake]


===================================================================================
NodeJS  

JS是客户端语言

----------------------------
安装环境

nodejs 官网：http://nodejs.org

HomeBrew:http://brew.sh

Linux:apt-get,yum等

---------------------
NodeJS命令行：

命令行工具： mac:iTerm

			 window:[不支持bash]  用git，支持git bash shell

NPM:node包管理和分发工具

ruby:  gem

python:pypi  setuptools

php : pear


-------------------
node中有基本模块  |
                  |    NPM
框架              |
                  |
库                   


=============================

npm中最常用的是 install    

在目录中 ：npm install grunt-cli

		   npm install =>pagejson

NPM->快速找到特定服务要使用的包-》下载 安装 管理
=================================================================
YEOMAN ： 现代webapp的脚手架工具

	在web项目的立项阶段，用yeoman来生成项目的文件，代码结构

	自动把最佳实践和工具整合刊登 ，加速和方便后续的开发

	代码校验 测试 压缩


全局中：npm install -g yo  安装

yo -v 看版本

------------------------------------
bower :web的包管理器

web站点组成：框架，库，公共部分等

Bower 则用来跟踪管理这些

npm install -g bower 

bower -v 


-----------------------
grunt :js build tool自动化 ，减少像压缩，编译，单元测试，代码校验这种重复且无业务关联的工作。

官网 http://gruntjs.com

安装指令：npm install -g grunt-cli

验证方法：grunt 


=====================================================
YEOMAN实践：
	
	[1]npm install -g generator-angular

		mkdir angular-in-action 

		sass[基于ruby，电脑上有要ruby  ,compass] 


rm是bash删除目录的指令  rm -rf node_modules   [ -rf递归删除，并不用二回确认]


Gurntfile.js： grunt配置文件 

bower.json:grunt配置文件 

travis.yml 为开源打造的集成环境

jshintrc 是jshin配制文件 

gitignore忽略当前不上传到git的文件 

gitattributes git配置项

editorconfig


	cd  进入

	mkdir创建

======================================================
Bower实践：

bower的两个配置文件  bower.json  bowerrc

bower init 配制文件 

项目中：bower install jquery


ls -al查看项目目录

------------------------
如果没在bower注册的安装：

1/github短语安装  jquery/jquery
2/完整的github地址

--------------------
框架或组件没在github上怎么办？ 直接通过url安装


--------------
http://bower.io/search/   jquery owner:jquery/








===================================
【前端自动化解决方案】

AngularJS

mobile web

retina 屏的适配

hybird web app的构建

通信方式

如何利用node快速创建git hook




===================================




%JAVA_HOME%\bin;%SystemRoot%\system32;%SystemRoot%;%SystemRoot%\System32\Wbem;%SYSTEMROOT%\System32\WindowsPowerShell\v1.0\;C:\Program Files\TortoiseSVN\bin;C:\Program Files\TortoiseGit\bin;C:\Program Files\nodejs\;C:\Program Files\nodejs\





C:\Program Files (x86)\Git\bin;%JAVA_HOME%\bin;%SystemRoot%\system32;%SystemRoot%;%SystemRoot%\System32\Wbem;%SYSTEMROOT%\System32\WindowsPowerShell\v1.0\;C:\Program Files\TortoiseSVN\bin;C:\Program Files\TortoiseGit\bin;C:\Program Files (x86)\nodejs\;C:\Program Files\nodejs\





