console.log("Hello everyone 🙌");
/*
Geben über eine Prompt-Anforderung ein Alter ein

Geben Sie in Abhängigkeit vom angegebenen Alter 
folgende Getränkeauswahl in die Konsole aus :

Alter 0-5 // Milch  --> age > 0 AND age < 6
Alter 6-12 // Saft
Alter 13-17 // Cola
18 + // Wein

-->zB: "Max trinkt Cola."
*/

/* Getränke-Challenge */

const prompt = require('prompt-sync')({ sigint: true });

let name = prompt("Bitte geben Sie Ihren Namen ein: ");
let alter = parseInt(prompt("Bitte geben Sie Ihr Alter ein: "));

let getränk = 
  alter > 0 && alter < 6 ? "Milch" :
  alter >= 6 && alter <= 12 ? "Saft" :
  alter >= 13 && alter <= 17 ? "Cola" :
  alter >= 18 ? "Wein" : null;

console.log(getränk ? `${name} trinkt ${getränk}.` : "Bitte geben Sie ein gültiges Alter ein.");
