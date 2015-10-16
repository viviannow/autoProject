/**
 * Created by zmouse on 2015/2/7.
 */
var http = require('http');

var req = http.request({
    port: 1234,
    method: 'POST',
    path: '/index.html'
});

//req.write();
req.end();