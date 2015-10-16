/**
 * Created by zmouse on 2015/1/14.
 */

module.exports = Controller('Admin/BaseController', function () {

    'use strict';

    return {

        /*
        * 登陆
        * */
        loginAction: function () {

            var self = this;

            if (self.isPost()) {
                var username = self.post('username').trim();
                var password = self.post('password').trim();

                if (username == '' || username.length > 16 || password == '') {
                    return self.errorMessage('登陆失败', '', '用户名或密码不正确！');
                }

                return D('user').where({
                    username: username
                }).find().then(function(userInfo) {
                    if (!userInfo || userInfo.password != md5(password)) {
                        return self.errorMessage('登陆失败', '', '用户名或密码不正确！');
                    }

                    var userInfoSession = {
                        uid: userInfo.id,
                        gid: userInfo.gid,
                        username: userInfo.username
                    };

                    return self.session('adminInfo', userInfoSession).then(function () {
                        return self.successMessage('登陆成功', '/admin');
                    });
                });
            } else {
                return self.display();
            }

        },

        /*
        * 退出
        * */
        logoutAction: function () {
            var self = this;

            return self.session('adminInfo', null).then(function () {
                return self.showMessage('退出成功', '/admin');
            });
        }

    }

});