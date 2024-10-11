"use strict";

let vorname = "Arno";
let nachname = "Herzogenrath";
let alter = 24;

let name = vorname + " " + nachname;

console.log(name);

let begruessung = `Hallo ${name}!`
console.log(begruessung);

let zusammenfassung = `${vorname} ${nachname} (${alter} Jahre)`;
console.log(zusammenfassung);

let mehrzeiliger_template_string = `\tGuten Tag ${vorname} ${nachname},
\twie geht es Ihnen?
    Ihr Alter ist ${alter} Jahre.
\tIhnen noch einen schönen Tag`;

console.log(mehrzeiliger_template_string);
