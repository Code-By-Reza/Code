
/*** Rechner */
/*
0. a+b | a-b | a*b | a/b  --> Ergebnis c 

1. Dateneingabe + -überprüfung :  
2. Auswahl Rechenart : 
3. Fkt. Grundrechenarten : 
4. Ausgabe in Konsole : 
*/

 //const ERROR_STR_DIV = "Error: Division by zero!";


  
 // Calculate

const prompt = require('prompt-sync')({ sigint: true });// Bibliothek zum Abrufen von Benutzereingaben

startApp(); //Starten der Anwendung
function startApp() {
    const result = calculate(25, 10, getOp());
    output(result);
}

function getOp() {
    const operator = prompt("Operator eingeben: (+, -, *, /, %) ?  "); // Operator eingeben (z.B. +, -, *, /,%)
    return operator;

}

function calculate(num1, num2, op) {
    switch (op) {
        case '+':
            return num1 + num2; // Addition
        case '-':
            return num1 - num2; // Subtraktion
        case '*':
            return num1 * num2; // Multiplikation
        case '%':
            return num1 % num2; // Rest
        case '/':
            if (num2 === 0) return "Fehler: Division duech Null";
            return num1 / num2; // Division

        default:
            return "Ungültiger Operator";


    }
}

function output(result){
    console.log("Ergebnis: ", result);
}  // Ende der Anwendung
 



 // module: calculator | tests:
// agreement : "+","-","*",":","/"
// output(calculator(3,2,"+"));
// output(calculator(3,2,"-"));
// output(calculator(3,2,"*"));
// output(calculator(3,2,":"));
// output(calculator(3,2,"/"));
// output(calculator(3,0,"/"));
// output(calculator(3,2,"#?!"))





// // module: division a / b | test:
// const ERROR_STR_DIV = "Error: Division by zero!";
// output(divide(3,2));
// output(divide(3,-2));
// output(divide(3,0));
// output(divide(0,0));
// function divide(a , b) {
   
//     if(b == 0){  // Ausnahme
//      return ERROR_STR_DIV ;
// }
//  return a / b;
// }



// module: multiplikation a * b | test:
// output(multiply(3,2));
// output(multiply(3,0));
// function multiply(a , b) {
//     return a * b;
    
// }

// // module: addition a + b | test:
// output(add(3,2));
// output(add(3,-2));
// output(add(3,0));
// function add(a,b) {
//     return a + b;
// }



// module: output | test:

// function output(outputData) {
//     console.log(outputData);
// }
 