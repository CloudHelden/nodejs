// event-loop.js

console.log("Start");

setTimeout(() => {
  console.log("setTimeout 0ms");
}, 0);

setImmediate(() => {
  console.log("setImmediate");
});

console.log("End");
