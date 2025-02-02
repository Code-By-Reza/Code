//  Zeilenkommentar

/*
    Blockkommentar  
 */

/***** Variablen 01 *******/

// console.log("Hi!");
// console.log(Hi);

/* Deklaration + Wertzuweisung I */

// let firstName; // Deklaration (Definition)
// console.log(firstName); // Ausgabe
// firstName = "Reza"; // Wertzuweisung | assignment
// console.log(firstName); // Ausgabe
// let familyName = "Kouh Payeh"; // Deklaration + Wertzuweisung
// console.log("Hi, ich bin " + firstName + " " + familyName + "!");

/*  
    Wertzuweisung II + Datentypen 
    JS ist eine untypisierte Sprache!
*/

// let test; // Deklaration
// console.log("Datentyp: " + typeof test);
// console.log("Inhalt: " + test);
// console.log("--------------------");
// test = "Hello"; // string
// console.log("Datentyp: " + typeof test);
// console.log("Inhalt: " + test);
// console.log("--------------------");
// test = 2; // number
// console.log("Datentyp: " + typeof test);
// console.log("Inhalt: " + test);
// console.log("--------------------");
// test = true; // boolean
// console.log("Datentyp: " + typeof test);
// console.log("Inhalt: " + test);
// console.log("--------------------");

/* Variablen vs. Konstanten in JS */

// Variable
let test;  // Variable : Deklaration
test = "Hi"; // Wertzuweisung (Initialisierung)
test = "Hello 🙌"; // Überschreiben
console.log("Inhalt: " + test); // Ausgabe

// Konstante
const test2 = "Hi! 🙌"; // Deklaration + Wertzuweisung gemeinsam !
// test2 = 2; // Laufzeitfehler !!
console.log("Inhalt: " + test2); // Ausgabe

