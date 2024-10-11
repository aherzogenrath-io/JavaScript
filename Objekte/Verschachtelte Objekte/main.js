"use strict";

// let iban = "DE6206752564419854";
// let bic = "GENODES1KV";
// let kontostand = 3500;
// let aktiv = true;



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

console.log(konto_1);

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

console.log(konto_2)
/*
Objekt für ein Auto anlegen
    - Marke
    - Model
    - Kraftstoffart
    - Kilometerstand
    - Ausstattung
        - Navigationssystem
        - Klimaanlage
        - Sitzheizung
        - Tempomat
        - Panoramadach
    - Zustand
    - Preis
*/

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

console.log(auto_1);
