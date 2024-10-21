"use strict";

/*
let zahlen = [1, 20, 2000, 1000000, 50];

let neu_sortiert = zahlen.sort();

console.log(neu_sortiert);
*/

let worte = ["Zahl", "Wahnsinn", "Mangel", "Abspann"];

let worte_neu = worte.sort();

console.log(worte_neu);


let zahlen = [1, 20, 2000, 1000000, 50];

/*
Für das sortieren von Zahlen-Arrays sollte deshalb eine Vergleichsfunktion genutzt werden
Ist Rückgabewert der Vergleichsfunktion < 0, wird a auf einnen niedrigeren Index als b gesetzt
Ist Rückgabewert der Vergleichsfunktion > 0, wird a auf einen höheren Index als b gesetzt
Ist Rückgabewert der Vergleichsfunktion = 0, bleibt alles wie es ist
return a - b sortiert in aufsteigender Reihenfolge
return b - a sortiert in absteigender Reihenfolge
*/

let zahlen_neu_aufsteigend = zahlen.sort(function(a, b) {
    return a - b;
});

console.log(zahlen_neu_aufsteigend);
