"use strict";

const haushaltsbuch = {
    gesamtbilanz: {
        einnahmen: 0,
        ausgaben: 0,
        bilanz: 0
    },
// Einträge werden durch prompts erfasst und in das Array eintraege gepusht
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

    eintraege_sortieren() {
        this.eintraege.sort(function(eintrag_a, eintrag_b) {
            if (eintrag_a.datum > eintrag_b.datum) {
                return -1;
            } else if (eintrag_a.datum < eintrag_b.datum) {
                return 1;
            } else {
                return 0;
            }
        });
    },

// loop mit der forEach function über jeden eintrag und gibt diesen
// als console.log aus
    eintrag_ausgeben() {
        console.clear();
        this.eintraege.forEach(function(eintrag) {
         console.log(`Titel: ${eintrag.titel}\n`
                + `Typ: ${eintrag.typ}\n`
                + `Betrag: ${eintrag.betrag} ct\n`
                + `Datum: ${eintrag.datum}\n`
            );
        });
    },
// loop durch jeden Eintrag und switch-case für die jeweiligen
// typen mit der jeweiligen berechnung in neue_gesamtbilanz
    gesamtbilanz_erstellen() {
        let neue_gesamtbilanz = {
            einnahmen : 0,
            ausgaben: 0,
            bilanz: 0
        };
        this.eintraege.forEach(function(eintrag) {
        switch (eintrag.typ) {
            case "Einnahme":
                neue_gesamtbilanz.einnahmen += eintrag.betrag;
                neue_gesamtbilanz.bilanz += eintrag.betrag;
                break;
            case "Ausgabe":
                neue_gesamtbilanz.ausgaben += eintrag.betrag;
                neue_gesamtbilanz.bilanz -= eintrag.betrag;
                break;
            default:
                console.log(`der Typ "${eintrag.typ}" ist nicht bekannt`);
                break;
        }
    });
    // gesamtbilanz mit den Werten aus neue_gesamtbilanz füllen
        this.gesamtbilanz = neue_gesamtbilanz;
    },

    gesamtbilanz_ausgeben() {
        console.log(`Einnahmen: ${this.gesamtbilanz.einnahmen} ct\n`
            + `Ausgaben: ${this.gesamtbilanz.ausgaben} ct\n`
            + `Bilanz: ${this.gesamtbilanz.bilanz} ct\n`
            + `Bilanz ist positiv: ${this.gesamtbilanz.bilanz >= 0}\n`)
    },

    eintrag_hinzufuegen () {
        let weiterer_eintrag = true;
        while (weiterer_eintrag) {
            this.eintrag_erfassen();
            this.eintraege_sortieren();
            this.eintrag_ausgeben();
            this.gesamtbilanz_erstellen();
            this.gesamtbilanz_ausgeben();
            weiterer_eintrag = confirm("Weiteren Eintrag hinzufügen?");
        };


    },

};


haushaltsbuch.eintrag_hinzufuegen();

console.log(haushaltsbuch);
