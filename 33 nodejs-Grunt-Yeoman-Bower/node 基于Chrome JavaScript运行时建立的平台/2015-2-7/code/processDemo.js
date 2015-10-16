/**
 * Created by zmouse on 2015/2/7.
 */

//console.log( process );


var i = 0;

/*
setInterval(function() {
    i++;

    console.log(i);

    if (i==10) {
        process.exit(1);
    }

}, 1000);*/

mvLog('hello');

function mvLog(str) {
    process.stdout.write(str);
}

process.stdin.resume();
process.stdin.on('data', function(data) {

    //console.log(data);

    var str = '你输入了数据：' + data;

    console.log( str.replace(/\n/, '') );

});
