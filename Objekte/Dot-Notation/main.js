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

//Werte auslesen (Dot-Notation)

let wert_1 = konto_1.iban;
console.log(wert_1);

let wert_2 = konto_2.bic;
console.log(wert_2);

let wert_3 = konto_1.inhaber.vorname;
console.log(wert_3);

//console log mit template string

console.log(`${konto_1.inhaber.vorname} ${konto_1.inhaber.nachname} hat ${konto_1.kontostand}€ auf seinem Konto`);

//Eigenschaften setzten (Dot Notation)

konto_1.abhebelimit = 1000;
console.log(konto_1);
console.log(konto_1.abhebelimit);

//Werte setzten bzw. verändern (Dot Notation)

konto_1.kontostand = 3000;
console.log(konto_1.kontostand);

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
*/

auto_1.ps = 200;

auto_1.model = "SLK";

console.log(`Ein ${auto_1.marke} ${auto_1.model} hat ${auto_1.ps} PS.`);
