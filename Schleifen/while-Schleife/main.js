"use strict";

// while (Bedingung) {
//     // ...
// };


let x = 0; // <-- Zählvariable

while(x < 5) {
    //x++;
    console.log(`While : ${x}`);
    x++;
};

let z = 0;

while (z < 10) {
    z++;
    if (z == 5) {
        continue;
    } else if (z == 7) {
        break;
    };
    console.log(z);
};

console.log("Schleife beendet!");


// Vorsicht vor Endlosschleifen!
