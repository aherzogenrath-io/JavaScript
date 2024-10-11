"use strict";

// if (Bedingung) {
//     Code, der ausgeführt wird wenn die Bedingung erfüllt(true) ist
// };

// if (false) {
//     console.log("If wurde ausgeführt!");
// }
// if (true) {
//     console.log("If wurde ausgeführt!");
// }

// if (10 > 20) {
//     console.log("If wurde ausgeführt!");
// }

// if (10 < 20 && 10 < 30) {
//     console.log("If wurde ausgeführt!");
// }


//alter eingeben
//alter ausgeben
//wenn größer als 18 "du bist alt genug"

const mindestalter = 18;
let benutzer_eingabe = parseInt(prompt("Dein Alter:"))

console.log(`Benutzer Alter: ${benutzer_eingabe}`);

if (benutzer_eingabe >= mindestalter){
    console.log("Du bist alt genug!");
}
if (benutzer_eingabe > mindestalter) {
    console.log("Du bist noch nicht alt genug!");
}
