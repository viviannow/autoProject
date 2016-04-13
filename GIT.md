website:
#http://git-scm.com/docs
#http://www.runoob.com/manual/github-git-cheat-sheet.pdf

## 安装完成后，还需要最后一步设置

>```$ git config --global user.name "Your Name"```     
>```$ git config --global user.email "email@example.com"```

注意git config命令的--global参数，用了这个参数，表示你这台机器上所有的Git仓库都会使用这个配置，当然也可以对某个仓库指定不同的用户名和Email地址。



版本库又名仓库，英文名repository，你可以简单理解成一个目录，这个目录里面的所有文件都可以被Git管理起来，每个文件的修改、删除，Git都能跟踪，以便任何时刻都可以追踪历史，或者在将来某个时刻可以“还原”。

'mkdir learngit' 创建目录

cd learngit 进入目录

pwd 命令用于显示当前目录


git init   把这个目录变成Git可以管理的仓库

ls -ah  命令就可以看见当前目录文件，包含隐藏的。



把一个文件放到Git仓库只需要两步

git add file.txt

git commit -m "提交说明"


git status 随时掌握工作区的状态

git diff 可以查看修改内容



git log 显示从最近到最远的提交日志     


git log --pretty=oneline















































