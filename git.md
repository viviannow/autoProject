Git是一个开源的分布式版本控制系统

文档 ： https://git-scm.com/docs    

安装包 ： https://git-scm.com/downloads   

Git 提供了一个叫做 git config 的工具，专门用来配置或读取相应的工作环境变量。

配置个人的用户名称和电子邮件地址：
```
$ git config --global user.name "runoob"
$ git config --global user.email test@runoob.com
```
要检查已有的配置信息，可以使用 git config --list 命令：

也可以直接查阅某个环境变量的设定，只要把特定的名字跟在后面即可，像这样：
$ git config user.name

工作区：就是你在电脑里能看到的目录。

暂存区：英文叫stage, 或index。一般存放在"git目录"下的index文件（.git/index）中，所以我们把暂存区有时也叫作索引（index）。

版本库：工作区有一个隐藏目录.git，这个不算工作区，而是Git的版本库。

Git 分支管理
```
git branch (branchname)

git checkout (branchname)

git merge 

$ git branch

git branch -d (branchname)

git merge
```



#### 远程提交项目
- 首先需要克隆线上的库

```
git clone git@github.com:hevily/hevily
```

- 开始提交   

```
//首先先链接下远程的git库  
git remote add origin git@github.com:hevily/hevily  
//开始把本地的文件全部添加下  
git add .  
//提交  
git commit -m "这里是我写的提交注释"  
//提交到远程  
git push -u origin master
```
