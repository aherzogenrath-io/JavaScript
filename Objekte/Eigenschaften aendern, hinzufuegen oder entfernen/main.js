"use strict";

let auto = {
    marke: "BMW"
};

// Eigenschaften aendern

auto.marke = "Tesla";

console.log(auto);

// Eigenschaften hinzufuegen

auto.model = "Model 3";
auto.ps = 450;
auto["farbe"] = "rot";

console.log(auto);

// Eigenschaften entfernen

delete auto.farbe;

console.log(auto);
