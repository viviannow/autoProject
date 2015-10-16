module.exports = {
    //模块配置
    app_group_list: ['Home', 'Admin'],
    default_group: 'Home',

    //开启路由配置
    url_route_on: true,

    //模版设置
    tpl_content_type: 'text/html',
    tpl_file_suffix: '.html',
    tpl_file_depr: '/',
    tpl_engine_type: 'ejs',
    tpl_engine_config: {},

    //数据库配置
    db_type: 'mysql',
    db_host: '127.0.0.1',
    db_port: '3306',
    db_name: 'miaov_blog',
    db_user: 'root',
    db_pwd: 'shire',
    db_prefix: 'blog_',
    db_charset: 'utf8'
};