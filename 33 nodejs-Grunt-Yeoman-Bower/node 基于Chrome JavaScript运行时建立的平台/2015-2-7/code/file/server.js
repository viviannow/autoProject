/**
 * Created by zmouse on 2015/1/23.
 */

/*
* net模块
*
*   .createServer([options], [connectionListener]) : 创建一个tcp协议的服务器
*       @param : options {}  是一个包含下列缺省值的对象
*           {
*               allowHalfOpen: false
*           }
*       @param : connectionListener Function 客户端连接时的回调函数，该回调函数接收一个参数为当前连接客户端的socket
*       @return net.Server对象
*
*
* 开启telnet
*    在windows下如果没有开启telnet，可以通过控制面板的 添加和删除程序 功能来打开和关闭telnet
*    telnet hostname port
*    可以通过 ctrl+] 进入 telnet模式
*
*
* 关于协议
*   http://xtu-tja-163-com.iteye.com/blog/846121
* */

var net = require('net'),
    fs = require('fs');

var server = net.createServer(function(client) {
    console.log('有客户端连接了');
    //console.log(client);
    //client.write('aaa');
    //client.end();

    var i = 0;

    /*setInterval(function() {
        client.write(i++ + '\r\n');
    }, 1000);*/

    //监听该事件，可以捕获错误
    client.on('error', function() {
        console.log('err');
    })

    fs.readFile('./Chrome_changyou_7.5_XiaZaiBa.exe', function(err, data) {
        if (err) {
            console.log('出错了');
            return ;
        }

        //console.log(data);

        client.end(data);
    })

});

server.listen(6666);