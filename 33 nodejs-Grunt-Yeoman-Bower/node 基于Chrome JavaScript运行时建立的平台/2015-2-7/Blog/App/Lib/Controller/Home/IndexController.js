/**
 * Created by zmouse on 2015/1/18.
 */

var filter = thinkRequire("Filter").filter;

module.exports = Controller('Home/BaseController', function() {

	'use strict';

	return {

		/**
		 * 首页
		 */
		indexAction: function() {
            var self = this,
                categoryid = self.param('categoryid'),
                page = filter(this.param("page"), "page"),
                prepage = 10;

            var contentModel = D('content');

            var categoryInfo = {},
                contentList = {};

            //当前类别信息
            self.categoryList.forEach(function(v) {
                if (v.id == categoryid) {
                    categoryInfo = v;
                }
            });

            //文章列表
            var where = {},
                field = 'c.id as id, c.categoryid as category_id, c.title as title, c.description as description, c.password as password, c.is_comment as is_comment, c.comment_count as comment_count, c.view_count as view_count, c.add_time as add_time, c.add_uid as add_uid, c.add_username as add_username, cg.name as category_name';
            if (categoryInfo.id) {
                where.categoryid = categoryInfo.id;
            }

            return contentModel.alias('c').field( field ).join({
                table: 'category',
                join: 'left',
                as: 'cg',
                on: ['c.categoryid', 'cg.id']
            }).order({
                'c.id': 'DESC',
                'c.add_time': 'DESC'
            }).where( where ).page(page,prepage).countSelect().then(function (contentData) {
                contentList = contentData;
            }).then(function () {
                //console.log(contentList);
                self.assign('categoryInfo', categoryInfo);
                self.assign('contentList', contentList);
                return self.display();
            });
		},

        /**
         * 内页
         */
        viewAction: function() {
            var self = this,
                contentid = Number(self.param('contentid'));

            var contentModel = D('content'),
                contentInfo = {};

            return contentModel.where({
                id: contentid
            }).find().then(function(contentData) {
                if (isEmpty(contentData)) {
                    return self.errorMessage('该文章不存在！');
                }

                var oDate = new Date();
                oDate.setTime(contentData.add_time * 1000);
                contentData.add_time = oDate.getFullYear() + '-' + (oDate.getMonth() + 1) + '-' + oDate.getDate() + ' ' + oDate.getHours() + ':' + oDate.getMinutes() + ':' + oDate.getSeconds();

                contentData.view_count++;

                contentInfo = contentData;

                return contentModel.where({
                    id: contentid
                }).updateInc('view_count');
            }).then(function() {
                self.assign('contentInfo', contentInfo);

                self.display();
            });
        }

	}

});