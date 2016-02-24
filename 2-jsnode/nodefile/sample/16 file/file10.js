var fs = require("fs");

console.log("查看 /kindsDemo/nodefile/ 目录");
fs.readdir("/kindsDemo/nodefile/",function(err, files){
   if (err) {
       return console.error(err);
   }
   files.forEach( function (file){
       console.log( file );
   });
});