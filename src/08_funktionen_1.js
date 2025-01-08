
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

ausgabeNamen_3("Reza");
function ausgabeNamen_3(firstName) { // Parameter

    console.log("Hallo, " + firstName + "!");
    
}