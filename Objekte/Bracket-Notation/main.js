"use strict";
let konto_1 = {
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

let konto_2 = {
    iban: "DE6206752564419869",
    bic: "GENODES1KV",
    inhaber: {
        vorname: "Maria",
        nachname: "Musterfrau",
        geschlecht: "weiblich",
        alter: 25
    },
    kontostand: 5500,
    aktiv: true
};

//Werte auslesen (Bracket-Notation)

let wert_1 = konto_1["iban"];
console.log(wert_1);

let wert_2 = konto_2["inhaber"]["geschlecht"];
console.log(wert_2);


//console log mit template string

//Eigenschaften setzten (Bracket Notation)

konto_1["abhebelimit"] = 1000;
console.log(konto_1["abhebelimit"]);


//Werte setzten bzw. verändern (Bracket Notation)

konto_1["kontostand"] = 3000;
console.log(konto_1["kontostand"]);

//Warum sollte wir die Bracket-Notation jemals verwenden?

let eigenschaft_1 = "iban";
let wert_3 = konto_1[eigenschaft_1];
console.log(wert_3)

let auto_1 = {
    marke: "Mercedes",
    model: "C180 Sportcoupé",
    kilometerstand: 180000,
    kraftstoffart: "Benzin",
    ausstattung:{
        navigationssystem: false,
        klimaanlage: true,
        sitzheizung: true,
        tempomat: true,
        panoramadach: true,
    },
    zustand: "Gut",
    preis: 4000
};

/*
    - Auto Objekt schnappen
    - PS hinzufügen
    - verändert Model des autos
    - gebt Template string aus: "Ein ... hat ... Ps." aus
    - einer der Werte soll über einen String in einer Variable ausgelesen werden
*/

auto_1["ps"] = 200;
auto_1["model"] = "SLK";

console.log(auto_1);

let eigenschaft_2 = "model";

console.log(`Ein ${auto_1["marke"]} ${auto_1[eigenschaft_2]} hat ${auto_1["ps"]}PS.`)
