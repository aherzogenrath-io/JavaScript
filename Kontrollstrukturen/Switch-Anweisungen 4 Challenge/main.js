"use strict";

let produkt = "Test";

/*
if (produkt === "Brot") {
    console.log("1,87€");
} else if (produkt === "Milch") {
    console.log("0,79€");
} else if (produkt === "Schokolade" || produkt === "Chips") {
    console.log("0,99€");
} else if (produkt === "Äpfel") {
    console.log("0,79€");
} else {
    console.log("Produkt wurde nicht gefunden");
}
*/

// Übersetzt das else-if-Konstrukt in einen Switch

switch(produkt) {
    case "Brot":
        console.log("1,87€");
        break;
    case "Milch":
    case "Äpfel":
        console.log("0,79€");
        break;
    case "Schokolade":
    case "Chips":
        console.log("0,99€");
        break;
    default:
        console.log(`Produkt (${produkt}) wurde nicht gefunden`);
};
