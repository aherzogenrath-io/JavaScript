"use strict";

const multiplizieren = function(a = 20, b = 10){
    console.log(a * b);
};

let z_1 = 45;
let z_2 = 18;

multiplizieren(z_1);

// funktion für begrüßung (vor, nach, alter)
// console log "Hallo ..."
// definiert default "Max, Mustermann, 18";
// 3 var devinieren
// function 2 mal aufrufen. einmal mit und einmal ohne parameter

const begruessung = function(vor = "Max", nach = "Mustermann", alt = 18){
    console.log(`Hallo ${vor} ${nach}, ${alt} Jahre`);
};

let vorname = "Arno";
let nachname = "Herzogenrath";
let alter= 28;

begruessung(vorname, nachname, alter);
begruessung();
begruessung(undefined, nachname, alter);
begruessung(vorname, nachname, undefined);
