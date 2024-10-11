"use strict";

const auto_1 = {
    marke: "Mercedes",
    model: "C180 Sportcoupé",
    treibstoff: "Benzin",
    besitzer: {
        vorname: "Arno",
        nachname: "Herzogenrath",
        alter: 24,
    },
    kilometerstand: 200000,
}

auto_1.marke = "Audi";
auto_1.zustand = "gut";
delete(auto_1.treibstoff);



console.log(auto_1);
