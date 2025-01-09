
/*** Rechner */
/*
0. a+b | a-b | a*b | a/b  --> Ergebnis c 

1. Dateneingabe + -überprüfung :  
2. Auswahl Rechenart : 
3. Fkt. Grundrechenarten : 
4. Ausgabe in Konsole : 
*/

 //const ERROR_STR_DIV = "Error: Division by zero!";


//  const prompt = require('prompt-sync')({sigint: true});

//  startApp()
//  function startApp() {
//     output(calculate(5, 1, getOp()));
    
//  }

//  function getOp() {
//     return prompt("OP?: ");
    
//  }


 // module: calculator | tests:
// agreement : "+","-","*",":","/"
// output(calculator(3,2,"+"));
// output(calculator(3,2,"-"));
// output(calculator(3,2,"*"));
// output(calculator(3,2,":"));
// output(calculator(3,2,"/"));
// output(calculator(3,0,"/"));
// output(calculator(3,2,"#?!"))

// Funktion calculate 

function calculate(num1, num2, op) {
    // Konvertiere die Eingaben in Zahlen
    num1 = parseFloat(num1); // Wandelt die erste Eingabe in eine Zahl um
    num2 = parseFloat(num2); // Wandelt die zweite Eingabe in eine Zahl um


    // Überprüfe die Operation und führe die Berechnung durch
    switch (op) {
        case '+': 
            return num1 + num2; // Addition
        case '-': 
            return num1 - num2; // Subtraktion
        case '*': 
            return num1 * num2; // Multiplikation
        case '/': 
            if (num2 === 0) { 
                return "Fehler: Division durch Null"; // Fehler, wenn der Divisor 0 ist
            }
            return num1 / num2; // Division
        case '%': 
            if (num2 === 0) { 
                return "Fehler: Division durch Null"; // Fehler, wenn der Divisor 0 ist
            }
            return num1 % num2; // Modulo (Rest der Division)
        case '^': 
            return Math.pow(num1, num2); // Exponentiation (erste Zahl hoch zweite Zahl)
        case '√': 
            if (num1 < 0) { 
                return "Fehler: Negative Wurzel"; // Fehler bei einer negativen Zahl
            }
            return Math.sqrt(num1); // Quadratwurzel der ersten Zahl
        default: 
            return "Ungültiger Operator"; // Fehler bei einem ungültigen Operator
    }
}

// Beispiele für Berechnungen:
console.log("Addition:", calculate(10, 5, '+')); // 10 + 5 = 15
console.log("Subtraktion:", calculate(10, 5, '-')); // 10 - 5 = 5
console.log("Multiplikation:", calculate(10, 5, '*')); // 10 * 5 = 50
console.log("Division:", calculate(10, 0, '/')); // 10 / 5 = 2
console.log("Modulo:", calculate(10, 3, '%')); // 10 % 3 = 1
console.log("Exponentiation:", calculate(2, 3, '^')); // 2^3 = 8
console.log("Quadratwurzel:", calculate(16, 0, '√')); // √16 = 4





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

function output(outputData) {
    console.log(outputData);
}
