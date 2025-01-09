console.log("Hello everyone \n")
/*** Rechner */
/*
0. a+b | a-b | a*b | a/b  --> Ergebnis c 

1. Dateneingabe + -überprüfung :  
2. Auswahl Rechenart : 
3. Fkt. Grundrechenarten : 
4. Ausgabe in Konsole : 
*/

// module: addition a + b | test:
output(add(3,2));
output(add(3,-2));
output(add(3,0));
function add(a,b) {
    return a + b;
}



// module: output | test:

function output(outputData) {
    console.log(outputData);
}
