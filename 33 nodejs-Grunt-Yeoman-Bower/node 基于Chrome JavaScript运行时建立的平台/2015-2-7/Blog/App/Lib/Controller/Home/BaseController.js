/**
 * 后台管理基础模块
 * @copyright: zmouse@vip.qq.com
 * Created by zmouse on 2015/1/14.
 */

module.exports = Controller(function () {

    'use strict';

    return {

        //当前登陆用户信息
        userInfo: {
            uid: 0,
            gid: 0,
            username: '',
            avatar: 0
        },

        categoryList: [],

        init: function (http) {
            var self = this;

            self.super("init", http);

            var categoryModel = D('category');

            var userInfo = self.cookie('userInfo');

            return categoryModel.field('id, name').where({
                is_enable: 1,
                is_recycle: 0
            }).select().then(function (categoryData) {
                if (!isEmpty(categoryData)) {
                    //所有类别列表
                    self.categoryList = categoryData;
                }
                self.assign('categoryList', self.categoryList);
            }).then(function() {
                if (userInfo) {
                    userInfo = JSON.parse(userInfo);

                    return D('user').where({
                        username: userInfo.username
                    }).find().then(function (userInfoData) {
                        if (isEmpty(userInfoData)) {
                            self.cookie('userInfo', null);
                            userInfo = {
                                uid: 0,
                                gid: 0,
                                username: '',
                                avatar: 0
                            }
                        } else {
                            userInfo.gid = userInfoData.gid;
                            userInfo.avatar = userInfoData.avatar;
                        }

                        self.userInfo = {
                            uid: userInfo.uid,
                            gid: userInfo.gid,
                            username: userInfo.username,
                            avatar: userInfo.avatar
                        };

                        self.assign('userInfo', self.userInfo);
                    })
                } else {
                    self.assign('userInfo', self.userInfo);
                }
            });

        },

        /*
         * 跳转提示 - 成功
         * @params:
         *      message <string> 提示信息
         *      url <string> 跳转url
         *      reason <string/array> 更多说明提示
         *      t <int> 等待时间
         *  @return promise
         * */
        successMessage: function(message, url, reason, t) {
            return this.showMessage('success', message, url, reason, t);
        },

        /*
         * 跳转提示 - 失败
         * @params:
         *      message <string> 提示信息
         *      url <string> 跳转url
         *      reason <string/array> 更多说明提示
         *      t <int> 等待时间
         *  @return promise
         * */
        errorMessage: function(message, url, reason, t) {
            return this.showMessage('error', message, url, reason, t);
        },

        /*
         * 跳转提示
         * @params:
         *      type <string> 提示信息类型：success|error
         *      message <string> 提示信息
         *      url <string> 跳转url
         *      reason <string/array> 更多说明提示
         *      t <int> 等待时间
         *  @return promise
         * */
        showMessage: function(type, message, url, reason, t) {
            var type = type || 'success';
            var message = message=='' || !isString(message) ? '' : message;
            var reason = isString(reason) ? [reason] : isArray(reason) ? reason : [];
            var t = t < 0 || !isNumber(t) ? 1000 : t;
            var url = url;
            if (url == '' || !isString(url)) {
                url = type == 'success' ? this.referer() : '';
            }

            this.assign('type', type);
            this.assign('message', message);
            this.assign('url', url);
            this.assign('reason', reason);
            this.assign('t', t);
            this.display('Admin/public/message' + C('tpl_file_suffix'));

            var deferred = getDefer();
            return deferred.promise;
        }

    }

});
