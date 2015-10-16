/**
 * Created by zmouse on 2015/2/7.
 */
var net = require('net');

var server = net.createServer(function(socket) {

    console.log('有数据过来了');

    socket.on('error', function() {
        console.log('err');
    })

    socket.on('data', function(data) {
        console.log('客户端说：' + data.toString());
    });

    process.stdin.resume();
    process.stdin.on('data', function(data) {
        var str = data.toString().replace(/\n/, '');

        console.log(str);
        socket.write(str);
        socket.end();
    })

});
server.listen(8686, '127.0.0.1');