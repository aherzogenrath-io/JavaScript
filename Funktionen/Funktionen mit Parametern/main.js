"use strict";

// const meine_funktion = function (parameter_1, parameter_2){
//     auszuführender Code
// };

// meine_funktion(parameter_1, parameter_2);

const log_die_zahl = function(a) {
    console.log(a);
};

log_die_zahl(42);

const begruessung = function(vorname, nachname) {
    console.log(`Hallo ${vorname} ${nachname}!`);
};

let vor = "Arno";
let nach = "Herzogenrath";

begruessung(vor, nach);

// 2 parameter zahlen
// 5 console logs muss eine grundrechnung (+ - * / %)
// 5 variable initialiesieren

const rechnung = function (a, b){
    console.log(a + b);
    console.log(a - b);
    console.log(a * b);
    console.log(a / b);
    console.log(a % b);
};

let var_1 = 3;
let var_2 = 5;
let var_3 = 4;
let var_4 = 7;
let var_5 = 10;

console.log("--------------");
rechnung(var_5, var_1);
console.log("--------------");
rechnung(var_5, var_2);
console.log("--------------");
rechnung(var_1, var_2);
console.log("--------------");
