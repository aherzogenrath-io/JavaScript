"use strict";

let zahlen = [12, 23, 25, 26, 12, 75, 24, 71, 11, 1, 5];

// let zahlen_unter_20 = [];

// for (let i = zahlen.length - 1; i >= 0; i--) {
//     if (zahlen[i] <= 20) {
//         zahlen_unter_20.push(zahlen[i]);
//     };
// };

// console.log(zahlen_unter_20);

let kleiner_Gleich_Zwanzig = zahlen.filter(function(e){
    if (e <= 20) {
        return true;
    } else {
        return false;
    }
});

console.log(kleiner_Gleich_Zwanzig);
