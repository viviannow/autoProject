网址：http://bower.io/

bower:web的包管理器

Bower是一个适合Web应用的包管理器，它擅长【前端的包管理】，通过其API展示了包依赖模型。使得项目不存在系统级的依赖，不同的应用程序间也不会共享依赖，整个依赖树是扁平的。

web站点的组成：框架 ，库，公共部分等，bower则用来跟踪管理这些

---------------------
安装Bower:

Bower依赖于Node和npm。可以使用npm全局安装Bower：

> npm install -g bower


全局安装Bower后，可以查看Bower的帮助信息，使用命令：

> bower help

用法:

    bower <command> [<args>] [<options>]


命令Commands:

    cache-clean    清除Bower的缓存，或清除指定包的缓存
    completion      Bower的Tab键自动完成
    help                  显示Bower命令的辅助信息
    info                   指定包的版本信息和描述
    init                     交互式的创建bower.json文件
    install               安装一个本地的包
    link                    包目录的符号连接
    list, ls               列出所有已安装的包
    lookup              根据包名查询包的URL
    register            注册一个包
    search              根据包名搜索一个包
    uninstall           删除一个包
    update              更新一个包


---------------
安装包：

bower install jquery

# GitHub shorthand
$ bower install desandro/masonry

# Git endpoint
$ bower install git://github.com/user/package.git

# URL
$ bower install http://example.com/script.js


----------------------------
更新或卸载Bower。

sudo npm update -g bower

sudo npm uninstall -global bower

bower install backbone

手动指定版本号。bower install jquery-ui#1.10.1

bower info命令用于查看某个库的详细信息。bower info jquery-ui


bower list或bower ls命令，用于列出项目所使用的所有库。


-----------------------------
配置文件.bowerrc
项目根目录下（也可以放在用户的主目录下）的.bowerrc文件是Bower的配置文件，它大概像下面这样。

{
  "directory" : "components",
  "json"      : "bower.json",
  "endpoint"  : "https://Bower.herokuapp.com",
  "searchpath"  : "",
  "shorthand_resolver" : ""
}
其中的属性含义如下。

directory：存放库文件的子目录名。
json：描述各个库的json文件名。
endpoint：在线索引的网址，用来搜索各种库。
searchpath：一个数组，储存备选的在线索引网址。如果某个库在endpoint中找不到，则继续搜索该属性指定的网址，通常用于放置某些不公开的库。
shorthand_resolver：定义各个库名称简写形式。

----------------------------------------------------


库信息文件bower.json
bower.json文件存放在库的根目录下，用于保存项目的库信息，供项目安装时使用，以及Bower的在线索引读取。

下面是一个典型的bower.json文件。

{
  "name": "app-name",
  "version": "0.1.0", 
  "main": ["path/to/app.html", "path/to/app.css", "path/to/app.js"],
  "ignore": [".jshintrc","**/*.txt"],
  "dependencies": {
    "sass-bootstrap": "~3.0.0",
    "modernizr": "~2.6.2",
    "jquery": "latests"
  },
  "devDependencies": {"qunit": ">1.11.0"}
}
在项目的根目录下，运行bower init命令，通过回答几个问题，就会自动生成bower.json文件。

bower init
有了bower.json文件以后，就可以用bower install命令，一下子安装所有库。

bower install




















