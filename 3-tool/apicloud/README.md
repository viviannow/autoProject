# APICloud
APICloud问题说明

=================================
【跨窗口调用节点】
使用注意:
 1.如果是主窗口，name名是root;
 2.  api.execScript({                name: 'root',
            frameName: '',
            script:'getCityList()'   //必须为字符串
        });
3.目标页面getCityList()  必须是全局函数，
=================================

