/* Berechnung Alter */

// Deklaration
let ageReza, ageMark; // ageMark wird deklariert
const birthYearReza = 1981;
const birthYearMark = 1990;

// Berechnung Alter
let date = new Date();
let year = date.getFullYear(); // "data" wurde zu "date" korrigiert
// let year = 2025; // Alternativ kann das Jahr manuell angegeben werden
ageReza = year - birthYearReza;
ageMark = year - birthYearMark; // Alter von Mark korrekt berechnet

// Ausgabe
console.log("ageReza: " + ageReza);
console.log("ageMark: " + ageMark);
// console.log("Datm. " + date); // Rechtschreibfehler in Kommentar: "Datm" könnte "Datum" sein

// Tests

let isRezaOlder;
isRezaOlder = (ageReza > ageMark); // Vergleich zwischen ageReza und ageMark
let isRezaEqual = (ageReza == ageMark); // Variable "isRezaEqual" deklariert

console.log("Is Reza older: " + isRezaOlder);
console.log("Is Reza equal: " + isRezaEqual); // Ausgabe korrigiert, richtige Variable genutzt
