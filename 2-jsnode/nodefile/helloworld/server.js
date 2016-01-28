//var http = require("http");  /*第一行请求（require）Node.js自带的?http?模块，并且把它赋值给?http?变量。*/
//
//http.createServer(function(request, response) { /*调用http模块提供的函数：?createServer?。这个函数会返回一个对象，这个对象有一个叫做?listen的方法，这个方法有一个数值参数，指定这个HTTP服务器监听的端口号。*/
//    response.writeHead(200, {"Content-Type": "text/plain"});
//    response.write("Hello World");
//    response.end();
//});
/*createServer()?的第一个也是唯一一个参数。因为在JavaScript中，函数和其他变量一样都是可以被传递的。*/



/*
会报错
var http = require("http");

function onRequest(request, response){
    console.log("Request received.");
    response.writeHead(200,{"Content-Type":"text/plain"});
    response.write("Hello World");
    response.end();
}

http.createServer(onRequest).listen(8888);

console.log("Server has started.");*/
