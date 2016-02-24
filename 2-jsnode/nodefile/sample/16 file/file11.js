var fs = require("fs");

console.log("准备删除目录 /kindsDemo/nodefile/test");
fs.rmdir("/kindsDemo/nodefile/test",function(err){
   if (err) {
       return console.error(err);
   }
   console.log("读取 /kindsDemo/nodefile/ 目录");
   fs.readdir("/kindsDemo/nodefile/",function(err, files){
      if (err) {
          return console.error(err);
      }
      files.forEach( function (file){
          console.log( file );
      });
   });
});