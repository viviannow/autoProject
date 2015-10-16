/**
 * Created by zmouse on 2015/2/7.
 */

/*
* new Buffer(size);
* new Buffer(array);
* new Buffer(string, [encoding]);
* */

//var bf = new Buffer(20);

//bf.write('abcdefghijklmn');

//console.log(bf);

//console.log( Buffer.isBuffer(bf) );

/*console.log(bf.length);

console.log(bf.toString());*/

//console.log( bf[0] );

/*
var bf2 = new Buffer( ['d'] );
console.log(bf2);

var bf3 = new Buffer( 'abcdefghijklmn' );
console.log(bf3);*/


var bf1 = new Buffer('abc');
var bf2 = new Buffer('def');

var arrBuffer = [bf1, bf2];

var bf3 = Buffer.concat(arrBuffer);

console.log(bf3.toString());


