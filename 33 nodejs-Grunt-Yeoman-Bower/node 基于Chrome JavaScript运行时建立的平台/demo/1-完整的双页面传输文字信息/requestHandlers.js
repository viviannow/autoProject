/*
* child_process是Node.js的一个十分重要的模块，通过它可以实现创建多进程，以利用多核计算资源。
* exec()做了什么呢，它从Node.js来执行一个shell命令。在上述例子中，我们用它来获取当前目录下所有的文件（“ls -lah”）,然后，当/startURL请求的时候将文件信息输出到浏览器中。
* */



var exec=require("child_process").exec;
var querystring=require("querystring");

function start(res,postData){

    console.log("request handler 'start'was called");
    var body='<html>'+
            '<head>'+
            '<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>'+
            '</head>'+
            '<body>'+
            '<form action="/upload" method="post">'+
            '<textarea name="text" rows="20" cols="60"></textarea>'+
            '<input type="submit" value="submit">'+
            '</form>'+
            '</body>'+
            '</html>';
    res.writeHead(200,{"Content-Type":"text/html"});
    res.write(body);

  /*  exec("ls -lah",function(error,stdout,stderr){
        res.writeHead(200,{"Content-Type":"text/plan"});
        res.write(stdout);
        res.end();
    });*/
   /* exec("find/",  //再看，没明白，
        {timeout:10000,maxBuffer:200000*1024},
        function(error,stdout,stderr){
            res.writeHead(200,{"Content-Type":"text/plan"});
            res.write(stdout);
            res.end();
        }
    );*/
}
function upload(res,postData){
    console.log("request handler 'uplode'was called");
        res.writeHead(200,{"Content-Type":"text/plan"});
        res.write("你发送了:"+querystring.parse(postData).text);
        res.end();

}

exports.start=start;
exports.upload=upload;






























