"use strict";
//funktionsausdrücke
const funktion_1 = function (){
    console.log("Funktion 1");
};

funktion_1();

let funktion_2 = function() {
    console.log("Funktion 2");
};

funktion_2();

funktion_2 = function(){
    console.log("Funktion 2 (neu)");
};
funktion_2();

//funktionsdeklarationen (werden gehoistet!)


function funktion_3() {
    console.log("Funktion 3");
}

funktion_3();
