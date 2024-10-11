"use strict";

const multiplizieren = function(a, b){
    return a * b;
};


const dividieren = function (a, b){
    return a / b;
};

let z_3 = 60;
let z_4 = 10;


console.log(dividieren(z_3, z_4));


let z_1 = 2;
let z_2 = 2;

let ergebnis = multiplizieren(z_1, z_2);

console.log(ergebnis);

let ergebnis_2 = multiplizieren(multiplizieren(z_1, z_2), multiplizieren(z_1, z_2));

console.log(ergebnis_2);

let e = 25;

if (true) {
 console.log(e);
};
