/**
 * Created by zmouse on 2015/2/7.
 */

var os = require('os');

console.log(os.tmpdir());

console.log( os.totalmem() / 1024 / 1024 / 1024 );
console.log( os.freemem() / 1024 / 1024 / 1024 );

