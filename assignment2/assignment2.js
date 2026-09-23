const EventEmitter = require('events'); //class -> EventEmitter
const student = new EventEmitter(); //obj -> student
student.on('login',() => { //creates the event
    console.log("Student Logged Successfully!");
});
student.on('assignment', () => {
    console.log('Assignment Submitted');
});
student.on('logout',() => {
    console.log("Student Logged Out");
});
student.on('exit', () => {
    console.log("Exiting Application");
});
student.emit('login'); //triggers the event
student.emit('assignment');
student.emit('logout');
student.emit('exit');