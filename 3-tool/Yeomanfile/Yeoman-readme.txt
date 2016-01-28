
脚手架：在web项目的立项阶段，用yeoman来生成项目的文件，代码结构。整合工具，加速方便后续开发。

安装：npm install -g yo[全局]

检测： yo -v [打出版本]




Yeoman 简介
通常在开发新项目时我们都需要配置工程环境，开发目录，需要下载一些库、框架文件（如 jQuery、Backbone 等），配置编译环境（Less、Sass、Coffeescript等），甚至还要配置单元测试框架，过程非常繁琐，还没开始编码时间就耗了大半天。为了解决这个问题 Paul Irish、Addy Osmani、Sindre Sorhus、Mickael Daniel、Eric Bidelman 和 Yeoman 社区共同开发的一个项目——Yeoman。


Yeoman 是由三个工具的组成：YO、GRUNT、BOWER

YO：Yeoman核心工具，项目工程依赖目录和文件生成工具，项目生产环境和编译环境生成工具。
GRUNT：前端构建工具，jQuery就是使用这个工具打包的。
BOWER：Web 开发的包管理器，概念上类似 npm，npm 专注于 NodeJs 模块，而 bower 专注于 CSS、JavaScript、图像等前端相关内容的管理。

Yeoman 特性：

快速创建骨架应用程序——使用可自定义的模板（例如：HTML5、Boilerplate、Twitter Bootstrap等）、AMD（通过RequireJS）以及其他工具轻松地创建新项目的骨架。
自动编译 CoffeeScrip 和 Compass——在做出变更的时候，Yeoman 的 LiveReload 监视进程会自动编译源文件，并刷新浏览器，而不需要你手动执行。
自动完善你的脚本——所有脚本都会自动针对 JSHint 运行，从而确保它们遵循语言的最佳实践。
内建的预览服务器——你不需要启动自己的 HTTP 服务器。内建的服务器用一条命令就可以启动。
非常棒的图像优化——使用 OptPNG 和 JPEGTran 对所有图像做了优化。
生成 AppCache 清单——Yeoman 会为你生成应用程序缓存的清单，你只需要构建项目就好。
“杀手级”的构建过程——你所做的工作不仅被精简到最少，让你更加专注，为你节省大量工作。
集成的包管理——Yeoman 让你可以通过命令行轻松地查找新的包，安装并保持更新，而不需要你打开浏览器。
对ES6模块语法的支持——你可以使用最新的 ECMAScript 6 模块语法来编写模块。这还是一种实验性的特性，它会被转换成 eS5，从而你可以在所有流行的浏览器中使用编写的代码。
PhantomJS单元测试——你可以通过 PhantomJS 轻松地运行单元测试。当你创建新的应用程序的时候，它还会为你自动创建测试内容的骨架。






==================================
Yeoman是Google的团队和外部贡献者团队合作开发的，

他的目标是通过Grunt（一个用于开发任务自动化的命令行工具）

和Bower（一个HTML、CSS、Javascript和图片等前端资源的包管理器）的包装为开发者创建一个易用的工作流。

【Yeoman主要有三部分组成：yo（脚手架工具）、grunt（构建工具）、bower（包管理器）。这三个工具是分别独立开发的，但是需要配合使用，来实现我们高效的工作流模式。】



yo插件都是通过npm, Node.js包管理器安装和管理的.














































