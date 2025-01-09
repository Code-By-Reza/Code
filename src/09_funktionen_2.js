
/*** Rechner */
/*
0. a+b | a-b | a*b | a/b  --> Ergebnis c 

1. Dateneingabe + -überprüfung :  
2. Auswahl Rechenart : 
3. Fkt. Grundrechenarten : 
4. Ausgabe in Konsole : 
*/

 const ERROR_STR_DIV = "Error: Division by zero!";


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

function calculate(num1, num2 , operator) {

        num1 = parseFloat(num1);
        num2 = parseFloat(num2);
    
        switch (operator) {
            case '+':
                return num1 + num2;
            case '-':
                return num1 + num2;
            case '*':
                return num1 + num2;
            case '/':
                if(num2 === 0){
                    return "Error: Division by zero";
                }
                return num1 / num2;
                default:
                    return "Invalid operator";
                
        }
        
    }
    
    const result = calculate(20, 0, '/');
    
    console.log("Result:" , result);




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
