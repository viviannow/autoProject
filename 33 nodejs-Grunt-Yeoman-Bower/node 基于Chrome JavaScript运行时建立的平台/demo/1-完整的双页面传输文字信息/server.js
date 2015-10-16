//
//var http=require("http");  /*nodejs自带http模块*/
//
//http.createServer(function(req,res){ /*返回对象，有个listen方法，监听端口号*/
//    console.log(1); /*这是有访问了*/
//	res.writeHead(200,{"Content-Type":"text/plan"});
//	res.write("hello world");
//	res.end();
//}).listen(8879);
//console.log("server has started");  /*这是测试联节成功了*/

/*
var http=require("http");
function onRequest(req,res){
    res.writeHead(200,{"Content-Type":"text/plan"});
    res.write("hello world");
    response.end();
}
http.createServer(onRequest).listen(88988);
*/

/*
* 服务器模块
*
* */

var http=require("http");  /*nodejs自带http模块*/

var url=require("url");

function start(route,handle){
    function onRequest(req,res){
        var postData="";
        var pathname=url.parse(req.url).pathname;
        console.log("request for"+pathname+"received.");
        req.setEncoding("utf-8");
        req.addListener("data",function(postDataChunk){
            postData+=postDataChunk;
            console.log("接收的数据是"+ postDataChunk + '.');
        });

        route(handle,pathname,res);/*res 请求成功与否*/

        //res.writeHead(200,{"Content-Type":"text/plan"});
        //res.write("hello world");
        //response.end();
    }
    http.createServer(onRequest).listen(8583);
    console.log("server has started");
}
exports.start=start;



























