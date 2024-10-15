"use strict";

const haushaltsbuch = {
    gesamtbilanz: {
        einnahmen: 0,
        ausgaben: 0,
        bilanz: 0
    },




// Eigenschaft einträge --> array immer wenn neuer eintrag
// --> neues objekt (titel,typ,betrag,datum) --> in array


    eintraege: [],

    eintrag_erfassen() {

        this.eintraege.push(
            {
                titel: prompt("Titel:"),
                typ: prompt("Typ (Einnahme oder Ausgabe)"),
                betrag: parseInt(prompt("Betrag in Cent:")),
                datum: prompt("Datum (jjj-mm-tt):")
            }
        );
    },
    eintrag_hinzufuegen () {
        this.eintrag_erfassen();
        this.eintrag_ausgeben();
    },
    // loopt über array mit for each --> für jeden Eintrag Console.log
    eintrag_ausgeben() {
        console.clear();
        this.eintraege.forEach(function(eintrag) {
         console.log(`Titel: ${eintrag.titel}\n`
                + `Typ: ${eintrag.typ}\n`
                + `Betrag: ${eintrag.betrag} ct\n`
                + `Datum: ${eintrag.datum}\n`
            );
        })
    }

}
haushaltsbuch.eintrag_hinzufuegen();
haushaltsbuch.eintrag_hinzufuegen();
haushaltsbuch.eintrag_hinzufuegen();
console.log(haushaltsbuch);


//     eintrag_mit_gesamtbilanz_verrechnen() {
//         switch (this.neuer_eintrag.typ) {
//             case "Einnahme":
//                 this.gesamtbilanz.einnahmen += this.neuer_eintrag.betrag;
//                 this.gesamtbilanz.bilanz += this.neuer_eintrag.betrag;
//                 break;
//             case "Ausgabe":
//                 this.gesamtbilanz.ausgaben += this.neuer_eintrag.betrag;
//                 this.gesamtbilanz.bilanz -= this.neuer_eintrag.betrag;
//                 break;
//             default:
//                 console.log(`der Typ "${this.neuer_eintrag.typ}" ist nicht bekannt`);
//                 break;
//         }
//         },

//     gesamtbilanz_ausgeben() {
//         console.log(`Einnahmen: ${this.gesamtbilanz.einnahmen} ct
// Ausgaben: ${this.gesamtbilanz.ausgaben} ct
// Bilanz: ${this.gesamtbilanz.bilanz} ct
// Bilanz ist positiv: ${this.gesamtbilanz.bilanz >= 0}`)
//     },






// };

// haushaltsbuch.eintrag_hinzufuegen();
// haushaltsbuch.eintrag_hinzufuegen();
