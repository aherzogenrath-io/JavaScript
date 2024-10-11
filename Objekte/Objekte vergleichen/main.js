"use strict";

let auto_1 = {
    marke: "BMW",
    model: "i8"
};

let auto_2 = {
    marke: "Tesla",
    model: "Model X"
};

let auto_3 = {
    marke: "Tesla",
    model: "Model X"
};

// console.log(auto_1 == auto_2);
// console.log(auto_2 == auto_3);
// console.log(auto_3 == auto_3);
// console.log({} == {});

// Challenge: Schreibe eine Funktion, die zwei Auto-Objekte mit den Eigenschaften "Marke" und "Modell"
// übergenem bekommt und prüft, ob die Objekte gleich sind.


const vergleiche = function(a1, a2) {
    return((a1.marke == a2.marke) && (a1.model == a2.model));
};

console.log(vergleiche(auto_1, auto_2));
