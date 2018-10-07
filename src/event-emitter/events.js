
var events = require('events');
var eventEmitter = new events.EventEmitter();

eventEmitter.on('event', () => {
  console.log('an event occurred!');
});
eventEmitter.emit('event');

setTimeout(()=>{
    console.log('time out function is called..');
},500);

setInterval(()=>{
    console.log('interval function ..');
},500);
