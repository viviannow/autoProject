/**
 * Created by zmouse on 2015/2/7.
 */

var events = require("events");
var ev = new events.EventEmitter();
var util = require('util');

/*console.log(ev);

ev.on('a', function() {
    console.log('...');
});

ev.emit('a');*/

/*Person() {
    this.name = name
}

Man() {
    Person.call(this)
}*/


function Person(name, age) {
    this.name = name;
    this.age = age;

    events.EventEmitter.call(this);
}

util.inherits(Person, events.EventEmitter);

Person.prototype.setAge = function(age) {
    var oldAge = this.age;
    this.age = age;
    this.emit('changeAge', {
        oldAge : oldAge,
        newAge : age
    });
}

var p1 = new Person('leo', 33);

//p1.setMaxListeners(1);

p1.on('changeAge', function(ev) {
    console.log('年龄被改了');
    console.log(ev);
});
p1.on('changeAge', function(ev) {
    console.log('年龄被改了2');
    console.log(ev);
});


p1.setAge(20);

console.log(p1);
console.log(p1.listeners('changeAge'));

console.log(events.EventEmitter.listenerCount(p1, 'changeAge'));
