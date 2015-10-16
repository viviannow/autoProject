/**
 * Created by zmouse on 2015/2/7.
 */

var net = require('net');

var client = net.connect(8686, '127.0.0.1');

client.on('connect', function() {

    var _this = this;

    process.stdin.resume();
    process.stdin.on('data', function(data) {
        var str = data.toString().replace(/\n/, '');

        //console.log(str);

        _this.write(str);
        _this.end();
    })

    //console.log('连接成功');
    //this.write('aaa');
    //this.end();
});

client.on('data', function(data) {

    console.log('服务器说：' + data.toString());

});

