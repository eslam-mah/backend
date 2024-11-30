var EventEmitter = require('events');
var emitter = new EventEmitter();
emitter.on('log',(arg) =>{
    console.log('message',arg);
});
emitter.emit('log', {id:26352354, name:'eslam'});