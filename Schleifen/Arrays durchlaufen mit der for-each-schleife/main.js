"use strict";

let zahlen = [
    5,
    65,
    47,
    8,
    49,
    22,
    67,
    90,
    4
];

console.log(zahlen);

// for (let i = 0; i < zahlen.length; i++) {
//     console.log(zahlen[i]);
// };
/*
let meine_funktion = function(e) {
    console.log(e);
};

zahlen.forEach(meine_funktion);
*/

zahlen.forEach(function(e) {
    console.log(e)
});
