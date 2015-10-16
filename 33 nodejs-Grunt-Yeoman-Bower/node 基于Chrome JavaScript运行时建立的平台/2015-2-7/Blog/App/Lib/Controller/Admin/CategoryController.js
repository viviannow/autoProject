/**
 * Created by zmouse on 2015/1/15.
 */

var filter = thinkRequire("Filter").filter;

module.exports = Controller('Admin/BaseController', function () {

    'use strict';

    return {

        indexAction: function () {

            var self = this,
                page = filter(this.get("page"), "page"),
                prepage = 10;

            var categoryModel = D('category');

            return categoryModel.order({
                id: 'DESC'
            }).page(page,prepage).countSelect().then(function(categoryList) {

                categoryList.data.length && categoryList.data.forEach(function (v) {
                    v.is_enable_text = v.is_enable == 1 ? '启用' : '禁用';
                    switch(v.is_comment) {
                        default:
                        case 0:
                            v.is_comment_text = '不允许评论';
                            break;
                        case 1:
                            v.is_comment_text = '开放评论';
                            break;
                        case 2:
                            v.is_comment_text = '注册评论';
                            break;
                    }
                });

                categoryList.jumpUrl = '/admin/category/index/page/';

                self.assign('dataList', categoryList);

                self.display();

            });

        },

        /*
        * 添加类别
        * */
        addAction: function () {

            var self = this;

            if (self.isPost()) {
                var name = self.post('name').trim(),
                    is_comment = Number(self.post('is_comment')),
                    is_enable = Number(self.post('is_enable'));

                if (name == '' || name.length > 50) {
                    return self.errorMessage('类别名称不能为空或者大于50个字符');
                }

                var categoryModel = D('category');
                return categoryModel.where({
                    name: name
                }).find().then(function(categoryInfo) {
                    if (!isEmpty(categoryInfo)) {
                        return self.errorMessage('类别已经存在了，请重新换一个名字');
                    }

                    return categoryModel.add({
                        name: name,
                        is_comment: is_comment,
                        is_enable: is_enable
                    });
                }).then(function(insertId) {
                    if (!insertId) {
                        return self.errorMessage('添加失败');
                    }
                    return self.successMessage('添加成功', '/admin/category');
                });
            } else {
                self.display();
            }

        },

        /*
        * 修改类别
        * */
        editAction: function () {
            var self = this,
                categoryid = filter(self.param('id'), 'id');

            var categoryModel = D('category');

            return categoryModel.where({
                id: categoryid
            }).find().then(function (categoryInfo) {
                if (isEmpty(categoryInfo)) {
                    return self.errorMessage('指定分类不存在');
                }
                return categoryInfo;
            }).then(function (categoryInfo) {
                if (self.isPost()) {
                    var name = self.post('name').trim(),
                        is_comment = Number(self.post('is_comment')),
                        is_enable = Number(self.post('is_enable'));

                    if (name == '' || name.length > 50) {
                        return self.errorMessage('类别名称不能为空或者大于50个字符');
                    }

                    return categoryModel.where({
                        id: ['!=', categoryid],
                        name: name
                    }).find().then(function(categoryInfo) {
                        if (!isEmpty(categoryInfo)) {
                            return self.errorMessage('类别已经存在了，请重新换一个名字');
                        }

                        return categoryModel.where({
                            id: categoryid
                        }).update({
                            name: name,
                            is_comment: is_comment,
                            is_enable: is_enable
                        });
                    }).then(function(affectedRows) {
                        if (!affectedRows) {
                            return self.errorMessage('修改失败');
                        }
                        return self.successMessage('修改成功', '/admin/category/edit/' + categoryid);
                    });
                } else {
                    self.assign('categoryInfo', categoryInfo);
                    return self.display();
                }
            })

        },

        /*
        * 删除
        * */
        deleteAction: function () {
            var self = this,
                categoryid = filter(self.param('id'), 'id');

            var categoryModel = D('category');

            return categoryModel.where({
                id: categoryid
            }).delete().then(function (affectedRows) {
                if (!affectedRows) {
                    return self.errorMessage('删除失败');
                }
                //删除关联内容
                return self.successMessage('删除成功');
            });
        }

    }

});