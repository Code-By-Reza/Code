
/*** Rechner */
/*
0. a+b | a-b | a*b | a/b  --> Ergebnis c 

1. Dateneingabe + -überprüfung :  
2. Auswahl Rechenart : 
3. Fkt. Grundrechenarten : 
4. Ausgabe in Konsole : 
*/

// // module: division a / b | test:
// const ERROR_STR_DIV = "Error: Division by zero!";
output(divide(3,2));
output(divide(3,-2));
output(divide(3,0));
output(divide(0,0));
// function divide(a , b) {
   
//     if(b == 0){ // Ausnahme
//      return ERROR_STR_DIV ;
// }
//  return a / b;
// }



// module: multiplikation a * b | test:
function divide(a , b) {
    return a * b;
    
}

// // module: addition a + b | test:
// output(add(3,2));
// output(add(3,-2));
// output(add(3,0));
// function add(a,b) {
//     return a + b;
// }



// module: output | test:

function output(outputData) {
    console.log(outputData);
}
