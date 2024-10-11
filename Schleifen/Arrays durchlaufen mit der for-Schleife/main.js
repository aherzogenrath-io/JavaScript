"use strict";

let personen = [
    "Peter",
    "Anna",
    "Mark",
    "Maximilian",
    "Mia"
];

// for (let x = 0; x < personen.length; x++) {
//     console.log(personen[x]);
// };

for (let i = 0; i < personen.length; i++) {
    console.log(`Hallo ${personen[i]}!`);
};

for (let i = personen.length - 1; i >= 0; i--) {
    console.log(`Tschüss ${personen[i]}!`);
};
