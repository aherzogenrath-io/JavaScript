"use strict";

let personen = [
    "Sebastian",
    "Marcel",
    "Anna",
    "Dennis",
    "Mia"
];


personen[1] = "Pia";

console.log(personen[1]);
console.log(personen);

// push(): fügt ein Element am Ende des Arrays hinzu (und gibt die neue Größe des Arrays zurückt)
// destruktiv

console.log(personen.push("Max"));
console.log(personen);

// pop(): Entfernt das letzte Element aus dem Array (und gibt es zurück)
// destruktiv

console.log(personen.pop());
console.log(personen);

// unshift: Fügt ein Element am Anfang des Arrays hinzu (und gibt die neue Größe des Arrays zurück)
// destruktiv

console.log(personen.unshift("Max"));
console.log(personen);

//shift(); Entfernt das erste Element aus dem Array (und gibt es zurück)
//destruktiv

console.log(personen.shift());
console.log(personen)
