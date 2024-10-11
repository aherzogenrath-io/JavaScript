"use strict";
/*
let auto_1 = {
    marke: "Hyundai",
    model: "i30 N",
    farbe: "rot"
};

let auto_2 = {
    marke: "Ford",
    model: "Fiesta ST",
    farbe: "schwarz"
};

let auto_3 = {
    marke: "VW",
    model: "Golf GTI",
    farbe: "blau"
};

let autos = [
    auto_1,
    auto_2,
    auto_3
];
*/

let autos = [
    {
        marke: "Hyundai",
        model: "i30 n",
        farbe: "rot"
    },
    {
        marke: "Ford",
        model: "Fiesta ST",
        farbe: "schwarz"
    },
    {
        marke: "VW",
        model: "Golf GTI",
        farbe: "blau"
    }
];

console.log(autos);

console.log(autos[0]);
console.log(autos[1]);
console.log(autos[2]);

console.log(autos[0]["marke"]);
console.log(autos[0].model);
console.log(autos[0].farbe);

console.log(autos[1].marke);
console.log(autos[1].model);
console.log(autos[1].farbe);

console.log(autos[2].marke);
console.log(autos[2].model);
console.log(autos[2].farbe);

/*
let waren = [
    [
        "Äpfel",
        "Birnen",
        "Bananen"
    ],
    [
        "Möhren",
        "Selerie",
        "Kohl"
    ],
    [
        "Graubrot",
        "Schwarzbrot",
        "Vollkornbrot"
    ]
];
*/

let waren = {
    obst: [
        "Äpfel",
        "Birnen",
        "Bananen"]
        ,
    gemuese: [
        "Möhren",
        "Selerie",
        "Kohl"
    ],
    brot: [
        "Graubrot",
        "Schwarzbrot",
        "Vollkornbrot"
    ]
};

console.log(waren.obst);
console.log(waren.gemuese);
console.log(waren.brot);

console.log(waren.obst[0]);
console.log(waren.obst[1]);
console.log(waren.obst[2]);

console.log(waren.gemuese[0]);
console.log(waren.gemuese[1]);
console.log(waren.gemuese[2]);

console.log(waren.brot[0]);
console.log(waren.brot[1]);
console.log(waren.brot[2]);
