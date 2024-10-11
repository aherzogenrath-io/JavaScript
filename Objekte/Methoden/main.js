"use strict";

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
    aktiv: true,
    einzahlen(betrag) {
        this.kontostand += betrag;
    },
    abheben(betrag) {
        this.kontostand -= betrag;
    }
};

let person = {
    vorname: "Arno",
    nachname: "Herzogenrath",
    alter: 24,
    zusammenfassen() {
        return {
            n: `${this.vorname} ${this.nachname}`,
            z: `${this.vorname} ${this.nachname} (${this.alter} Jahre)`,
            b: `Hallo ${this.vorname} ${this.nachname}!`
        };
    },
    heiraten(neu) {
        this.nachname = neu;
    }
};

console.log(person.zusammenfassen().b);

person.heiraten("Müller");

console.log(person);
console.log(person.zusammenfassen());

console.log(person.zusammenfassen().n);

person.heiraten("Herzogenrath");

console.log(person.zusammenfassen().b);
