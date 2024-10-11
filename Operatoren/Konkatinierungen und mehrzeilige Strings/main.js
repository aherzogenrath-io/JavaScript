"use strict";

let vorname = "Arno";
let nachname = "Herzogenrath";
let alter = 24;

let name = vorname + " " + nachname;
let Begruessung = "Hallo " + name + ", wie geht es Ihnen?";
let zusammenfassung = name + "\n(" + alter + " Jahre)";
console.log(Begruessung);
console.log(zusammenfassung);

let einzeiliger_string = "Das ist ein einzeiliger String";

let mehrzeiliger_stringn ="\tIch will diesen String " +
"in der nächsten Zeile vortsetzen!" +
"\n\tund wenn ich will," +
" kann ich auch noch eine Zeile weiter gehen.";

console.log(einzeiliger_string);
console.log(mehrzeiliger_stringn);
