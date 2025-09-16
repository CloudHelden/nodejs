console.log("Hello Node.js");
const mathe = require('./module2/math')

console.log( mathe.plus(3,4))
console.log( mathe.mal(3,4))

// // node-globals.js

// console.log("In Node gibt es kein window oder document.");
// console.log("window:", typeof window);      // undefined
// console.log("document:", typeof document);  // undefined

// console.log("Stattdessen gibt es 'global' und 'process':");
// console.log(global);    // Node's global object
// console.log(process);   // Infos über laufenden Prozess

// //Demo
// console.log("Node Version:", process.version);
// console.log("Aktuelles Verzeichnis:", process.cwd());
// console.log("Plattform:", process.platform);