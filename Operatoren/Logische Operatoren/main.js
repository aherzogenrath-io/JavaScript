"use strict";

//logische "und" &&
//logisches "oder" ||
//logisches "nicht" !

console.log(1 > 0 && 4 < 6);
console.log(1 > 0 && 6 < 4);
console.log("-------------------")

console.log(1 > 0 || 4 < 6);
console.log(1 > 0 || 6 < 5);
console.log("-------------------")

console.log(1 > 0 && (6 < 4));
console.log(1 > 0 && !(6 < 4));
console.log("-------------------")

console.log(true);
console.log(!true);
console.log("-------------------")

console.log(1 > 0 && 4 < 6 && 10 < 20);
console.log(1 > 0 && 4 < 6 && 10 > 20);
console.log("-------------------")

console.log(1 > 0 && 4 < 6 || 10 > 20);
console.log(1 > 0 && 4 > 6 || 10 < 20);
