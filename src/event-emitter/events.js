var fs = require('fs');
const output = fs.createWriteStream('./stdout.log');
const errorOutput = fs.createWriteStream('./stderr.log');
// custom simple logger
const logger = new console.Console(output, errorOutput);
// use it like console
const count = 5;
logger.log('count: %d', count);
// in stdout.log: count 5

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
