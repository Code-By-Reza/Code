
/*********   CODE CHALLENGE 01 **********/
 
/*
Geben Sie über eine Prompt-Anforderung eine Zahl ein.
Geben Sie über eine Prompt-Anforderung eine zweite Zahl ein.
Berechnen Sie die Summe der beiden Zahlen.
Geben Sie die Summe der Zahlen in die Konsole aus:
"Die Summe der Zahlen ist: summe"
*/

const prompt = require('prompt-sync')({sigint: true});

/*********** Variante 1  ****************/
// Vorteil: gute Lesbarkeit | aber viele Variablen

// let ziffer1, ziffer2, zahl1, zahl2, summe;

// ziffer1 = prompt("Bitte Zahl 1 eingeben: ");
// ziffer2 = prompt("Bitte Zahl 2 eingeben: ");

// console.log("Datentyp: " + typeof ziffer1);
// console.log("Datentyp: " + typeof ziffer2);

// // Typkonvertierung 1: ziffer --> zahl (mit Nachkomma)
// zahl1 = parseFloat(ziffer1);
// zahl2 = parseFloat(ziffer2);

// console.log("Datentyp: " + typeof zahl1);
// console.log("Datentyp: " + typeof zahl2);

// summe = zahl1 + zahl2;

// console.log("Die Summe der Zahlen ist: " + summe);

/*********** Variante 2  ****************/

// Kompaktere Lösung

// let zahl1, zahl2, summe;

// zahl1 = parseInt(prompt("Zahl 1: "));
// zahl2 = parseInt(prompt("Zahl 2: "));

// summe = zahl1 + zahl2;

// console.log("Die Summe der Zahlen ist: " + summe);

/*********** Variante 3  ****************/
// Kompakt, aber schlechter lesbar, unflexibel

console.log
(
    "Die Summe ist: " + 
   (
    Number(prompt("Bitte Zahl 1 eingeben ")) +
    Number(prompt("Bitte Zahl 2 eingeben "))
   ) 
);