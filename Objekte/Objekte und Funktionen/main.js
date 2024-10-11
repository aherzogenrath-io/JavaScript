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
    kontostand: 3600,
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

const kontostand_ausgeben = function(konto) {
    console.log(`${konto.inhaber.vorname} ${konto.inhaber.nachname} hat ${konto.kontostand}€ auf dem Konto`);
}

const geld_ueberweisen = function (konto_a, konto_b, Menge) {
    konto_a.kontostand = konto_a.kontostand - Menge;
    konto_b.kontostand = konto_b.kontostand + Menge;
};

geld_ueberweisen(konto_1, konto_2, 500);

kontostand_ausgeben(konto_1);
kontostand_ausgeben(konto_2);

console.log(konto_1);

const bic_aendern = function(konto, bic_neu) {
    konto.bic = bic_neu;
    console.log(konto);
}

bic_aendern(konto_1, "TESTESTEST");

const nachname_aendern = function (konto, nachname_neu){
    konto.inhaber.nachname = nachname_neu;
    console.log(konto);
};

nachname_aendern(konto_2, "Huber");

kontostand_ausgeben(konto_2);

const ein_jahr_vergeht = function (konto) {
    konto.inhaber.alter++;
    console.log(konto.inhaber);
};

ein_jahr_vergeht(konto_1);
ein_jahr_vergeht(konto_1);
ein_jahr_vergeht(konto_1);

bic_aendern(konto_1, "Hallihallo");

ein_jahr_vergeht(konto_2);
