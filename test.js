var asleep = require('./main.js');

console.log('go');
asleep(2, function(){
    console.log('done1');
});
asleep(2, function(){
    console.log('done2');
});
