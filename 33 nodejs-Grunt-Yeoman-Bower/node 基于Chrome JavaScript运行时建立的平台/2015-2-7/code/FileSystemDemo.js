/**
 * Created by zmouse on 2015/2/7.
 */

var fs = require('fs');

/*
fs.writeFile('./1.txt', 'Hello', function(err) {
    if (err) {
        console.log('写文件失败');
        return ;
    }
    console.log('写文件成功');
});
*/

//console.log('aaaaa');

//fs.writeFileSync('k:/miaov/分享/nodejs/2015-2-7/code/1.txt', 'Hello');

//console.log(callback);

//console.log('写文件成功');
//console.log('写文件失败');

var filename = './1.txt';

try {
    fs.writeFileSync(filename, 'Hello');
    console.log('写文件成功');
} catch(e) {
    console.log( '写文件失败' );
}

//console.log('aaaaa');

setTimeout(function() {
    fs.renameSync(filename, './2.txt');
}, 5000);

fs.mkdir('./a');

//fs.readFileSync()

fs.readFile('./hello.txt', function(err, data) {
    if (err) {
        console.log('读取文件出错了');
        return ;
    }

    console.log(data.toString());

});