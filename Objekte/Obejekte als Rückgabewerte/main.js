"use strict";

let person = {
    vorname: "Max",
    nachname: "Mustermann",
    alter: 18
};

const person_verarbeiten = function (p) {
    // let name = `${p.vorname} ${p.nachname}`;
    // let zusammenfassung = `${p.vorname} ${p.nachname} (${p.alter} Jahre)`;
    // let begruessung = `Hallo ${p.vorname} ${p.nachname}!`;

    // let rueckgabe_objekt = {
    //     n: `${p.vorname} ${p.nachname}`,
    //     z: `${p.vorname} ${p.nachname} (${p.alter} Jahre)`,
    //     b: `Hallo ${p.vorname} ${p.nachname}!`
    // };

    return {
        n: `${p.vorname} ${p.nachname}`,
        z: `${p.vorname} ${p.nachname} (${p.alter} Jahre)`,
        b: `Hallo ${p.vorname} ${p.nachname}!`
    };
};

let object = person_verarbeiten(person);

console.log(object);
