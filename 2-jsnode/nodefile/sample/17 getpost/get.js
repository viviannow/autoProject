var http = require('http');
var url = require('url');
var util = require('util');

http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(util.inspect(url.parse(req.url, true)));
}).listen(3000);

/*
{ protocol: null,
  slashes: null,
  auth: null,
  host: null,
  port: null,
  hostname: null,
  hash: null,
  search: '?name=w3c&email=w3c@w3cschool.cc',
  query: { name: 'w3c', email: 'w3c@w3cschool.cc' },
  pathname: '/user',
  path: '/user?name=w3c&email=w3c@w3cschool.cc',
  href: '/user?name=w3c&email=w3c@w3cschool.cc' }
  
 */