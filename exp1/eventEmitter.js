const EventEmitter = require('events'); //class -> EventEmitter
const myEmitter = new EventEmitter(); //obj -> myEmitter
myEmitter.on('greet', (name) => {
    console.log(`Hello, ${name}! Welcome to Node.js`);
});
myEmitter.on('exit', () => {  //on -> event listener
    console.log('Application Closed.');
});
myEmitter.emit('greet', 'Arpita Mishra'); //emit -> to trigger the event
myEmitter.emit('exit');