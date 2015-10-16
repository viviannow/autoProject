/**
 * Created by zmouse on 2015/2/7.
 */

/*
* global
* */

//console.log( global );

/*
* console :
* */

//console.log( 'hello' );

/*console.time('a');

console.time('b');



console.timeEnd('b');

console.timeEnd('a');*/

/*
console.time('a');

for (var i=0; i<1000; i++) {

    console.time('b');
    for (var j=0; j<1000000; j++) {

    }
    console.timeEnd('b');

}

console.timeEnd('a');*/

console.log( __filename );
console.log( __dirname );

var i=0;

setInterval(function() {
    i++;
    console.log(i);
}, 100);
