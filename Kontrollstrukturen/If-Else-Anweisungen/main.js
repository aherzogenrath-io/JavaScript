"use strict";

// if (Bedigung){
//     Code der ausgeführt wird, wenn die Bedingung erfüllt(true) ist
// } else{
//     Code der ausgeführt wird, wenn die Bedingung nicht erfüllt(false) ist
// }

// if (false) {
//     console.log("If wurde ausgeführt!");
// } else{
//     console.log("Else wurde ausgeführt");
// }

const mindestalter = 18;
let benutzer_eingabe = parseInt(prompt("Dein Alter:"))

console.log(`Benutzer Alter: ${benutzer_eingabe}`);

if (benutzer_eingabe > mindestalter){
    console.log("Du bist alt genug!");
} else  if (benutzer_eingabe == mindestalter){
    console.log("Du bist gerade so  alt genug!");
} else {
    console.log("Du bis noch nicht alt genug");
}
