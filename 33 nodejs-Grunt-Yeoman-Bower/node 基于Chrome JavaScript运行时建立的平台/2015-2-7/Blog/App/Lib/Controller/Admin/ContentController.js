/**
 * Created by zmouse on 2015/1/17.
 */

var filter = thinkRequire("Filter").filter;

module.exports = Controller('Admin/BaseController', function () {

    'use strict';

    return {

        indexAction: function () {
            var self = this,
                page = filter(this.get("page"), "page"),
                prepage = 10;

            var contentModel = D('content');

            return contentModel.alias('c').field('c.id as id, c.categoryid as category_id, c.title as title, c.description as description, c.password as password, c.is_comment as is_comment, c.comment_count as comment_count, c.view_count as view_count, c.add_time as add_time, c.add_uid as add_uid, c.add_username as add_username, cg.name as category_name').join({
                table: 'category',
                join: 'left',
                as: 'cg',
                on: ['c.categoryid', 'cg.id']
            }).order({
                'c.id': 'DESC',
                'c.add_time': 'DESC'
            }).page(page,prepage).countSelect().then(function(contentList) {

                contentList.data.length && contentList.data.forEach(function (v) {
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
                        case -1:
                            v.is_comment_text = '使用分类设置';
                            break;
                    }
                });

                contentList.jumpUrl = '/admin/content/index/page/';

                self.assign('dataList', contentList);

                self.display();

            });
        },

        addAction: function () {
            var self = this;

            if (self.isPost()) {
                var categoryid = Number(self.post('categoryid')),
                    title = self.post('title').trim(),
                    description = self.post('description').trim(),
                    content = self.post('content').trim(),
                    password = self.post('password').trim(),
                    is_comment = Number(self.post('is_comment'));

                if (categoryid == 0) {
                    return self.errorMessage('请选择一个分类');
                }
                if (title == '' || title.length > 255) {
                    return self.errorMessage('文章标题不能为空或者大于255个字符');
                }
                if (description.length > 500) {
                    return self.errorMessage('文章简介不能大于500个字符');
                }
                if (password != '') {
                    password = md5(password);
                }

                var contentModel = D('content');

                return contentModel.add({
                    categoryid: categoryid,
                    title: title,
                    description: description,
                    content: content,
                    password: password,
                    is_comment: is_comment,
                    add_time: Date.now() / 1000,
                    add_uid: self.userInfo.uid,
                    add_username: self.userInfo.username
                }).then(function (insertId) {
                    if (!insertId) {
                        return self.errorMessage('添加失败');
                    }
                    return self.successMessage('添加成功', '/admin/content');
                });
            } else {
                var categoryModel = D('category');
                return categoryModel.order({
                    id: 'DESC'
                }).select().then(function (categoryList) {
                    self.assign('categoryList', categoryList);
                    return self.display();
                });
            }
        },

        editAction: function () {
            var self = this,
                contentid = filter(self.param('id'), 'id');

            var contentModel = D('content');

            return contentModel.where({
                id: contentid
            }).find().then(function (contentInfo) {
                if (isEmpty(contentInfo)) {
                    return self.errorMessage('指定内容不存在');
                }
                return contentInfo;
            }).then(function (contentInfo) {
                if (self.isPost()) {
                    var categoryid = Number(self.post('categoryid')),
                        title = self.post('title').trim(),
                        description = self.post('description').trim(),
                        content = self.post('content').trim(),
                        password = self.post('password').trim(),
                        is_comment = Number(self.post('is_comment'));

                    if (categoryid == 0) {
                        return self.errorMessage('请选择一个分类');
                    }
                    if (title == '' || title.length > 255) {
                        return self.errorMessage('文章标题不能为空或者大于255个字符');
                    }
                    if (description.length > 500) {
                        return self.errorMessage('文章简介不能大于500个字符');
                    }
                    if (password != '') {
                        password = md5(password);
                    }

                    var contentModel = D('content');

                    return contentModel.where({
                        id: contentid
                    }).update({
                        categoryid: categoryid,
                        title: title,
                        description: description,
                        content: content,
                        password: password,
                        is_comment: is_comment,
                    }).then(function (insertId) {
                        if (!insertId) {
                            return self.errorMessage('修改失败');
                        }
                        return self.successMessage('修改成功', '/admin/content');
                    });
                } else {
                    self.assign('contentInfo', contentInfo);
                    var categoryModel = D('category');
                    return categoryModel.order({
                        id: 'DESC'
                    }).select().then(function (categoryList) {
                        self.assign('categoryList', categoryList);
                        return self.display();
                    });
                }
            })
        },

        /*
         * 删除
         * */
        deleteAction: function () {
            var self = this,
                contentid = filter(self.param('id'), 'id');

            var contentModel = D('content');

            return contentModel.where({
                id: contentid
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