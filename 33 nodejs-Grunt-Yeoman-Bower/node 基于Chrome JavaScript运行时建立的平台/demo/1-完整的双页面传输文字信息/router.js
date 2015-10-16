/*
* 路由
*
*
* */

function route(handle,pathname,res,postData){
    console.log("about to route a request for"+pathname);
    if(typeof(handle[pathname])==='function'){
        handle[pathname](res,postData); /*返回请求函数*/
    }else{
        console.log("no request handler found for"+pathname);
        res.writeHead(404,{"Content-Type":"text/plan"});
        res.write("404 not found");
        res.end();
    }
}
exports.route=route;