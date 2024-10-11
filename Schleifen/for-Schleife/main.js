"use strict";

let x = 0; // Zählvariable

while (x < 5) { // Bedingung
    console.log(x);
    x++; // Anweisung für die Zählvariable
};
/*
for (Zählvariable; Bedingung; Anweisung für die Zählvariable) {
    Code;
};
*/

for (let i = 0; i < 5; i++) {
    if (i == 0) {
        continue;
    } else if (i == 4) {
        break;
    };
    console.log(i);
};
console.log("For-Schleife ist beendet!");

// Vorsicht for Endlosschleifen!

/*
for (let j = 0; j >= 0; j++) {
    ...
};
*/
