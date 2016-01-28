网址： https://github.com/

初次提交本地git 到远程github:

8、创建本地新项目工作树
# mkdir new-project
# cd new-project
# git init
# touch README
# git add README
# git commit -m 'first commit'
定义远程服务器别名origin
#  git remote add origin git@github.com:xxx/new-project.git   
本地和远程合并，本地默认分支为master
# git push origin master  

GitHub网站上就可以看见了， http://github.com/xxx/new-project








【1】从远程clone一个项目：

如远程有一个jquery-code的项目，
执行：git clone git@github.com:名/库名.git
注意：会建立一个【名】文件包，里面有.git文件包，项目就是【名】里面，cd进去[cd js-projects]后就可以操作了。
可以执行如下：
git checkout -b 'myBranchName' 创建并进入新分支 git status
git add [文件名]
git commit -m "说明"
git push origin master 提交到远程服务器

分支相关：


查看远程分支 





github-study
关于github的一点自己的整理。

Fork 就是服务端的克隆
star 标星号
watch 监视
pull 拉
push 推，推动 requests 要求; 需要
lssues 分配
gist 要点，主旨; 大要
spaces 空间
soft wrap
Commit changes 提交修改
cancel 取消
bootcamp 公共测试版软件
set up 建立; 准备; 安排; 引起;

collaborate 合作，协作; 协调
projects 计划
remote 远程的
counting objects 总项目
resolving解决
deltas 变量增量
checking 
connectivity 连通性
follers跟随者
following跟随了
Organizations 组织; 机构; 团体;
Public activity 公共活动
contributions 贡献
repositories 仓库; 宝库; 存放处
mirrors 镜子
edit profile 修改轮廓

【命令总结】 Github配制： $ git config --global user.name "viviannow" $ git config --global user.email "572755296@qq.com"

创建文件类： $ mkdir learngit $ cd learngit $ pwd 显示文件目录 $ git init成为git仓库

$ git add readme.txt 加入缓存 $ git commit -m "wrote a readme file" 加入仓库

$ git status 看状态 $ git diff readme.txt 看不同

$ git log 日志 $ git log --pretty=oneline 一行显示日志

$ git reset --hard HEAD^ 返回上一个版本 $ git reset --hard 3628164 返回到3628164版本

$ cat readme.txt 查看内容

$ git reflog 用来记录你的每一次命令：

git diff HEAD -- readme.txt查看工作区和版本库里面最新版本的区别

git checkout -- file可以丢弃工作区的修改--很重要，没有--，就变成了“创建一个新分支”的命令，

git reset HEAD file可以把暂存区的修改撤销掉（unstage重新放回工作区

$ rm test.txt 删除test文件

$ ssh-keygen -t rsa -C "youremail@example.com" 创建SSH Key：

$ git clone git@github.com:michaelliao/gitskills.git 远程克隆

$ git checkout -b dev 命令加上-b参数表示创建并切换

git branch命令查看当前分支：

$ git checkout master 切换回master分支

$ git merge dev 把dev分支的工作成果合并到master分支上[在master分支下]

$ git branch -d dev 删除dev分支

Git用<<<<<<<，=======，>>>>>>>标记出不同分支的内容，我们修改如下后保存：

$ git log --graph --pretty=oneline --abbrev-commit 用带参数git log可以看到分支的合并情况

$ git merge --no-ff -m "merge with no-ff" dev 准备合de分支注意--no-ff参表示禁用Fast forward

$ git log --graph --pretty=oneline --abbrev-commit

$ git stash 可以把当前工作现场“储藏”起来，等以后恢复现场后继续工作

$ git checkout dev

$ git stash list 用git stash list命令看看

作现场还在，Git把stash内容存在某个地方了，但是需要恢复一下，有两个办法： git stash apply恢复，但是恢复后，stash内容并不删除，你需要用git stash drop来删除； git stash pop，恢复的同时把stash内容也删了： $ git stash apply stash@{0} 然后恢复指定的stash，

分支还没有被合并要删除将丢失掉修改如要强行删除要使用命令git branch -D feature-vulcan

要查看远程库的信息，用git remote

用git remote -v显示更详细的信息：

可以用git branch命令看看

$ git push origin master把该分支推送到远程库对应的远程分支上

查看分支：git branch

创建分支：git branch

切换分支：git checkout

创建+切换分支：git checkout -b

合并某分支到当前分支：git merge

删除分支：git branch -d

查看远程库信息，使用git remote -v；

本地新建的分支如果不推送到远程，对其他人就是不可见的； 从本地推送分支，使用git push origin branch-name，如果推送失败，先用git pull抓取远程的新提交； 在本地创建和远程分支对应的分支，使用git checkout -b branch-name origin/branch-name，本地和远程分支的名称最好一致；

建立本地分支和远程分支的关联用git branch --set-upstream branch-name origin/branch-name； 从远程抓取分支，使用git pull，如果有冲突，要先处理冲突

$ git tag v1.0 $ git tag $ git config --global color.ui true 让Git显示颜色，会让命令输出看起来更醒目

特殊的.gitignore文件把文件忽略掉

Windows:
Thumbs.dbehthumbs

.dbDesktop.ini
删除git的repositories点进项目，右侧的settings中最下面就是



































网址：廖雪峰的官方网站  http://www.liaoxuefeng.com/wiki/0013739516305929606dd18361248578c67b8067c8c017b000

客户端下载   http://git-scm.com/download/  git bush 或  git gui

-----------------------------

创建新仓库:

创建新文件夹，打开，然后执行 git init以创建新的 git 仓库。

-----------------------------

检出仓库

执行如下命令以创建一个本地仓库的克隆版本：git clone /path/to/repository 

如果是远端服务器上的仓库，你的命令会是这个样子：git clone username@host:/path/to/repository

----------------------------------
跟远程仓库连接   $ git clone git@github.com:michaelliao/gitskills.git

-----------------------------

工作流
你的本地仓库由 git 维护的三棵“树”组成。
第一个是你的 工作目录，它持有实际文件；
第二个是 缓存区（Index），它像个缓存区域，临时保存你的改动；
最后是 HEAD，指向你最近一次提交后的结果。


-----------------------------


添加与提交
你可以计划改动（把它们添加到缓存区），使用如下命令：
git add <filename>
git add *
这是 git 基本工作流程的第一步；
使用如下命令以实际提交改动：git commit -m "代码提交信息"
现在，你的改动已经提交到了 HEAD，但是还没到你的远端仓库。


-----------------------------



推送改动
你的改动现在已经在本地仓库的 HEAD 中了。执行如下命令以将这些改动提交到远端仓库：
git push origin master
可以把 master 换成你想要推送的任何分支。 

如果你还没有克隆现有仓库，并欲将你的仓库连接到某个远程服务器，你可以使用如下命令添加：
git remote add origin <server>
如此你就能够将你的改动推送到所添加的服务器上去了。



-----------------------------



分支
分支是用来将特性开发绝缘开来的。在你创建仓库的时候，master 是“默认的”。在其他分支上进行开发，完成后再将它们合并到主分支上。

创建一个叫做“feature_x”的分支，并切换过去：git checkout -b feature_x

切换回主分支：git checkout master

再把新建的分支删掉：git branch -d feature_x

除非你将分支推送到远端仓库，不然该分支就是 不为他人所见的：
git push origin <branch>


-----------------------------


更新与合并
要更新你的本地仓库至最新改动，执行：git pull
以在你的工作目录中 获取（fetch） 并 合并（merge） 远端的改动。

要合并其他分支到你的当前分支（例如 master），执行：git merge <branch>

两种情况下，git 都会尝试去自动合并改动。不幸的是，自动合并并非次次都能成功，并可能导致 冲突（conflicts）。 这时候就需要你修改这些文件来人肉合并这些 冲突（conflicts） 了。
改完之后，你需要执行如下命令以将它们标记为合并成功：git add <filename>
在合并改动之前，也可以使用如下命令查看：
git diff <source_branch> <target_branch>


-----------------------------



标签
在软件发布时创建标签，是被推荐的。这是个旧有概念，在 SVN 中也有。可以执行如下命令以创建一个叫做 1.0.0 的标签：
git tag 1.0.0 1b2e1d63ff
1b2e1d63ff 是你想要标记的提交 ID 的前 10 位字符。使用如下命令获取提交 ID：
git log
你也可以用该提交 ID 的少一些的前几位，只要它是唯一的。



-----------------------------


替换本地改动
假如你做错事（自然，这是不可能的），你可以使用如下命令替换掉本地改动：
git checkout -- <filename>
此命令会使用 HEAD 中的最新内容替换掉你的工作目录中的文件。已添加到缓存区的改动，以及新文件，都不受影响。

假如你想要丢弃你所有的本地改动与提交，可以到服务器上获取最新的版本并将你本地主分支指向到它：
git fetch origin
git reset --hard origin/master


-----------------------------


有用的贴士
内建的图形化 git：gitk

彩色的 git 输出：git config color.ui true

显示历史记录时，只显示一行注释信息：git config format.pretty oneline

交互地添加文件至缓存区：git add -i