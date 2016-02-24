// 加载模块
var http = require("http");

// 请求函数
function onRequest(req,res){
	res.writeHead(200, {"Content-Type": "text/plain"});
	res.write("Hello World");
	res.end();
}

// 创建服务器并监听
http.createServer(onRequest).listen(8888);