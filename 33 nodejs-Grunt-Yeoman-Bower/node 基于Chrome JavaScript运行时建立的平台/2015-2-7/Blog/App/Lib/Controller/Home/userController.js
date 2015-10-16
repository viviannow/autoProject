/**
 * Created by zmouse on 2015/1/18.
 */

module.exports = Controller('Home/BaseController', function () {

    'use strict';

    return {

        /*
        * 注册
        * */
        registerAction: function () {
            var self = this;

            if (self.isPost()) {
                var username = self.post('username').trim(),
                    password = self.post('password').trim(),
                    repassword = self.post('repassword').trim(),
                    avatar = Number(self.post('avatar'));

                if (username == '' || username.length > 20) {
                    return self.errorMessage('用户名不能为空或者大于20个字符');
                }
                if (password == '' || password.length > 20) {
                    return self.errorMessage('密码不能为空或者大于20个字符');
                }
                if (password != repassword) {
                    return self.errorMessage('两次输入密码不一致');
                }
                if (!avatar) {
                    avatar = 1;
                }

                var userModel = D('user');
                return userModel.where({
                    username: username
                }).find().then(function (userInfo) {
                    if (!isEmpty(userInfo)) {
                        return self.errorMessage('该用户名已经被注册了');
                    }
                }).then(function () {
                    return userModel.add({
                        username: username,
                        password: password,
                        avatar: avatar,
                        gid: 10
                    }).then(function (insertId) {
                        if (!insertId) {
                            return self.errorMessage('注册失败');
                        }

                        self.cookie('userInfo', JSON.stringify({
                            uid: insertId,
                            username: username,
                            avatar: avatar
                        }));

                        var jumpUrl = self.cookie('jumpUlr') || '/';

                        self.cookie('jumpUlr', null);

                        return self.successMessage('注册成功', jumpUrl);
                    });
                });
            } else {
                var jumpUrl = self.referer() || '/';

                self.cookie('jumpUlr', jumpUrl);
                return self.display();
            }
        },

        loginAction: function () {
            var self = this;

            if (self.isPost()) {
                var username = self.post('username').trim(),
                    password = self.post('password').trim();

                var userModel = D('user');

                return userModel.where({
                    username: username
                }).find().then(function (userData) {
                    if (isEmpty(userData)) {
                        return self.errorMessage('登陆失败：该用户不存在');
                    }
                    if (userData.password != md5(password)) {
                        return self.errorMessage('登录失败：密码错误');
                    }

                    self.cookie('userInfo', JSON.stringify({
                        uid: userData.id,
                        username: userData.username,
                        avatar: userData.avatar
                    }));

                    var jumpUrl = self.cookie('jumpUlr') || '/';

                    self.cookie('jumpUlr', null);

                    return self.successMessage('登陆成功', jumpUrl);
                });
            } else {
                var jumpUrl = self.referer() || '/';

                self.cookie('jumpUlr', jumpUrl);

                return self.display();
            }

        },

        logoutAction: function () {
            var self = this;

            var jumpUrl = self.referer() || '/';

            self.cookie('userInfo', null);

            return self.successMessage('成功退出', jumpUrl);
        }

    }

})