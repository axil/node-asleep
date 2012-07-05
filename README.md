asleep
======

Asynchronous sleep() for Node.js.

Wait for n seconds asyncronously using `process.nextTick()`. Primarily indended for debugging.

Example
-------

    var asleep = require('asleep');

    asleep(3, function(){
        console.log('done1');
    });                     
    
    asleep(3, function(){
        console.log('done2');
    });                       // in 3 seconds two messages will appear at once
