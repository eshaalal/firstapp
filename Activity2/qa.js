// create any event ,register call back function, emit the event.

const EventEmitter = require('events');
const myEmitter = new EventEmitter();
myEmitter.on('myEvent', () => {
  console.log('My event has been emitted!');
});

myEmitter.emit('myEvent');

