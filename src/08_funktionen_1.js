
/***** Funktionen 01 *****/
// 1. Kapselung von Codeblöcken

// Funktionsaufruf | call
// test();

// Funktionsrumpf | callee
// Funktionsdeklaration

function test(){

console.log("Hello, World!✌\n");

}
test();

/***** Funktionen 02a *****/
// 2a. Parametrisierung + Datenübergabe von INNEN

//ausgabeNamen_1();
//function ausgabeNamen_1() {

    //let firstName = "Reza";
    //console.log("Hallo, " + firstName + "!");
    
//}


/***** Funktionen 02a *****/
// 2a. Parametrisierung + Datenübergabe von INNEN

//function ausgabeNamen_2(name) {
    
    //console.log(`Hallo ${name}, Wilkommen!`);
//}

//ausgabeNamen_2("Reza");

/***** Funktionen 02b *****/
// 2b. Parametrisierung + Datenübergabe von AUSSEN

//ausgabeNamen_3("Reza");
//function ausgabeNamen_3(firstName) { // Parameter

  //  console.log("Hallo, " + firstName +  "\n");
    
//}

/***** Funktionen 02c *****/
// 2c. Mehrere Parameter / Argumente
//ausgabeNameParamas("Reza", "Kouhpayeh\n");

//const prompt = require('prompt-sync')({sigint:true});
//ausgabeNameParamas(prompt("Vorname? :"), prompt("Name? :")); // piping




//function ausgabeNameParamas(firstName,secondName) {
   // console.log("Hallo 🙌, " + firstName + " " + secondName );
    
//}

/***** Funktionen 03a *****/
// 03a. Vorbereitung -Trennen der Funktionalitäten
// Postulat: one function = one job (uncle Bob)
// SRP single responsibility principle

//ausgabeNamenSRP("Reza", "Kouhpayeh\n");

//function ausgabeNamenSRP(firstName,secondName) {

    // 1. Funktionalität: string composing

    // const GAP = " ";
    // let outputStr = "Hallo,😊 " + GAP + firstName + GAP + secondName ;

    //console.log( outputStr);
    
//}

/**Funktionen 03b */
//output("Hello everyone!");
//output(1000 + "€" );
//output(true);
//function output(outputData) {
   // console.log(outputData)
    
//}

// 1. Funktionalität: string composing

//output(getString("Reza","Kouhpayeh"));

//function getString(firstName, secondName) {
    //const GAP = " ";
    //let outputStr = "Hallo,"+ GAP + firstName + GAP + secondName + "!"
  
    //return outputStr; // return schickt die Daten an den cell........

//}


// 1. Funktionalität: string output

//function output(outputData) {
    //console.log(outputData);
//}

// Funktionen mit Rückgabewerten

function addiere(a,b) {
    return a + b;
    
}

let summe = addiere(10, 5);
console.log("Die Summe ist:" + summe);