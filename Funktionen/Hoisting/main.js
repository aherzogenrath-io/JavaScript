"use strict";

// let a;
// a = 5;
// console.log(a);  --> 5

// let b;
// console.log(b);  --> undefined
// b = 10;
// console.log(b);  --> 10

// c = 15;
// console.log(c);  --> error (c is not defined)
// let c;


var a;
a = 5;
console.log(a);

var b;
console.log(b);
b = 10;
console.log(b);

c = 15;
console.log(c);
var c;

// var deklariert alle Variablen am Anfang
// --> unschöne Praktik

if (true) {
    var d = 20;
}

console.log(d);
