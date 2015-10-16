/**
 * Created by zmouse on 2015/2/7.
 */
var http = require('http');
var fs = require('fs');

var server = http.createServer(function(request, response) {
    console.log('有人来了');

   //console.log(request);

    console.log(request.url);

    var filename = __dirname + '/www' + request.url;

    console.log(filename);

    fs.readFile(filename, function(err, data) {
        if (err) {
            response.writeHead(404, {
                'Content-Type': 'text/html;charset="utf-8"' });
            response.end('<h1>404，页面未找到</h1>');
        }

        response.writeHead(200, {
            'Content-Type': 'text/html;charset="utf-8"' });
        response.end(data);
    });


});

server.listen(1234);