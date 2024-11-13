"use strict";

// setTimeout(callback-funktion, zeitspanne [, parameter1, parameter2, ...])

// console.log("Los!");
// setTimeout(function() {
//     console.log("Fertig!");
// }, 2000);

// setTimeout(code-string, zeitspanne)

// console.log("Los!");
// // entweder \"...\" oder '...'
// console.log(setTimeout("console.log(\"Fertig!\");", 2000));

// clearTimeout(2);

// setIntervall(callback-funktion, zeitspanne [, parameter1, parameter2, ...])

// setInterval(function() {
//     console.log("Eine Sekunde ist um");
// }, 1000);

// setIntervall(code-string, zeitspanne)

console.log(setInterval("console.log(\"Eine Sekunde ist um!\");", 1000));

setTimeout(function() {
    clearInterval(2);
}, 5000);
