/**
 * 后台管理首页
 * @copyright: zmouse@vip.qq.com
 * Created by zmouse on 2015/1/14.
 */

module.exports = Controller('Admin/BaseController', function () {

    'use strict';

    return {

        /*
        * 首页
        * */
        indexAction: function () {

            var self = this;

            return self.display();

        }

    }

})


