/**
 * Created by zmouse on 2015/1/23.
 */

var net = require('net'),
    fs = require('fs');

var client = net.connect({
    port: 6666
});

client.on('connect', function() {
    console.log('connect');
});

var fileData = [],fileDataLen = 0;

client.on('data', function(data) {
    console.log(data);
    console.log(data.length);
    fileData.push(data);
    fileDataLen += data.length;
});

client.on('close', function() {
    var data = Buffer.concat(fileData, fileDataLen);
    console.log(data.length);

    fs.writeFile('./newData.exe',data, function(err) {
        if (err) {
            console.log('文件保存失败');
        } else {
            console.log('文件保存成功');
        }
    });
});