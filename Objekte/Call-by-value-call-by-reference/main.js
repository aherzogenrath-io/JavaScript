"use strict";

let meine_variable = "Arno";
let mein_objekt = {
    zahl: 5000
};

const meine_funktion = function (v, o){
    v = "Dennis";
    o.zahl = 2500;
};

meine_funktion(meine_variable, mein_objekt);

console.log(meine_variable);
console.log(mein_objekt.zahl);

// call-by-value (Übergabe als Wert): gilt für primitive Datentypen (strings, number, boolean)
// call-by-reference (Übergabe als Verweis/Rückgabeverweis): gilt für komplexere Datentypen (OBjekten, FUnktionen , Arrays)


let konto = {
    iban: "DE6206752564419854",
    bic: "GENODES1KV",
    inhaber: {
        vorname: "Arno",
        nachname: "Herzogenrath",
        geschlecht: "männlich",
        alter: 24
    },
    kontostand: 3500,
    aktiv: true
};
console.log(konto.kontostand);

// 2 Funktionen "Geld einzahlen", "Geld abheben"


const geld_einzahlen = function(konto, betrag){
    konto.kontostand += betrag;
    console.log(konto.kontostand);
};

const geld_abheben = function(konto, betrag) {
    konto.kontostand -= betrag;
    console.log(konto.kontostand);
};

geld_einzahlen(konto, 200);
