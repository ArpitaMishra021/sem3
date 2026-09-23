console.log("Program Started");
setTimeout(() => {
    console.log("setTimeout");
}, 0);
setImmediate(() => {
    console.log("setImmediate");
});
process.nextTick(() => {
    console.log("process.nextTick");
});
console.log("Program Ended");