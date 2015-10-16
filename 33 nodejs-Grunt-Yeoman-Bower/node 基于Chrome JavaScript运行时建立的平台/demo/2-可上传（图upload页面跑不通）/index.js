/*
*主文件 index
* 访问 ：http://127.0.0.1:8583/upload
*        http://127.0.0.1:8583/start
*        http://127.0.0.1:8583/show
* */

var server=require("./server");
var router=require("./router");
var requestHandlers=require("./requestHandlers");

var handle={};
handle["/"]=requestHandlers.start;
handle["/start"]=requestHandlers.start;
handle["/upload"]=requestHandlers.upload;
handle["/show"]=requestHandlers.show;
server.start(router.route,handle);