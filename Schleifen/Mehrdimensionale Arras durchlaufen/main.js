"use strict";

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

// console.log(waren[0][0]);


for (let i = 0; i < waren.length; i++) {
    for (let j = 0; j < waren[i].length; j++) {
        console.log(`Ich hätte gerne ${waren[i][j]}!`);
    };
};
