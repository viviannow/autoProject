/**
 * Created by zmouse on 2015/1/14.
 */

module.exports = [

//前台
    //首页-列表
    [/^(\d*)((\/)?page\/(\d+))?$/, 'home/index/index?categoryid=:1&page=:4'],
    //内页
    [/view((\/)(\d*))?/, 'home/index/view?contentid=:3'],
    //注册
    ['register', 'home/user/register'],
    //登陆
    ['login', 'home/user/login'],
    //退出
    ['logout', 'home/user/logout'],

//登陆
    ['admin/login', 'admin/public/login'],

//分类
    //修改
    ['admin/category/edit/:id', 'admin/category/edit'],
    //删除
    ['admin/category/delete/:id', 'admin/category/delete'],

//内容
    //修改
    ['admin/content/edit/:id', 'admin/content/edit'],
    //删除
    ['admin/content/delete/:id', 'admin/content/delete']
];