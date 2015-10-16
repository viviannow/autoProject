///*
//* child_process是Node.js的一个十分重要的模块，通过它可以实现创建多进程，以利用多核计算资源。
//* exec()做了什么呢，它从Node.js来执行一个shell命令。在上述例子中，我们用它来获取当前目录下所有的文件（“ls -lah”）,然后，当/startURL请求的时候将文件信息输出到浏览器中。
//* */
//
//
//
//var exec=require("child_process").exec;
//
//var querystring=require("querystring"),fs=require("fs"),formidable=require("formidable");
//
//function start(res){
//    console.log("req handler 'start 'was called");
//
//    var body='<html>'+
//                '<head>'+
//                '<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>'+
//                '</head>'+
//                '<body>'+
//                '<form action="/upload" method="post" enctype="multipart/form-data">'+
//                '<input type="file" name="upload" multiple="multiple">'+
//                '<input type="submit" value="submit">'+
//                '</form>'+
//                '</body>'+
//                '</html>';
//    res.writeHead(200,{"Content-Type":"text/html"});
//    res.write(body);
//    res.end();
//}
//function upload(res,req){
//    console.log("req handler 'uplode' was called");
//    var form = new formidable.IncomingForm();
//    form.uploadDir = 'tmp';
//    console.log(" about to parse ");
//
//    form.parse(req,function(error,fields,files){
//
//        fs.renameSync(files.upload.path,"./tmp/test.png");
//        res.writeHead(200,{"Content-Type":"text/html"});
//        res.write("you send image:<br/>");
//        res.write('<img src="/show" />');
//        res.end();
//    })
//}
//function show(res) {
//    console.log("req handler 'uplode'was called");
//    fs.readFile("/tmp/test.png", "binary", function (error, files) {
//        if (error) {
//            res.writeHead(500, {"Content-Type": "text/plain"});
//            res.write(error + "\n");
//            res.end();
//        } else {
//            res.writeHead(200, {"Content-Type": "image/png"});
//            res.write(files, "binary");
//            res.end();
//        }
//    })
//}
//
//exports.start=start;
//exports.upload=upload;
//exports.show=show;
//
//
var querystring = require("querystring"), fs = require("fs"),
    formidable = require("formidable");

function start(res, postData) {
    console.log("req handler 'start' was called.");

    var body = '<html>'+
        '<head>'+
        '<meta http-equiv="Content-Type" '+
        'content="text/html; charset=UTF-8" />'+
        '</head>'+
        '<body>'+
        '<form action="/upload" enctype="multipart/form-data" '+
        'method="post">'+
        '<input type="file" name="upload">'+
        '<input type="submit" value="Upload file" />'+
        '</form>'+
        '</body>'+
        '</html>';

    res.writeHead(200, {"Content-Type": "text/html"});
    res.write(body);
    res.end();
}

function upload(res, req) {
    console.log("req handler 'upload' was called.");

    var form = new formidable.IncomingForm();
    form.uploadDir = 'tmp';
    console.log("about to parse");
    form.parse(req, function(error, fields, files) {
        console.log("parsing done");
        fs.renameSync(files.upload.path, "./tmp/test.png");
        res.writeHead(200, {"Content-Type": "text/html"});
        res.write("received image:<br/>");
        res.write("<img src='/show' />");
        res.end();
    });
}

function show(res, postData) {
    console.log("req handler 'show' was called.");
    fs.readFile("./tmp/test.png", "binary", function(error, file) {
        if(error) {
            res.writeHead(500, {"Content-Type": "text/plain"});
            res.write(error + "\n");
            res.end();
        } else {
            res.writeHead(200, {"Content-Type": "image/png"});
            res.write(file, "binary");
            res.end();
        }
    });
}

exports.start = start;
exports.upload = upload;
exports.show = show;