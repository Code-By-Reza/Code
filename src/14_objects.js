
/***** Erinnerung: Arrays *******/

const PromptSync = require("prompt-sync");

let arr;
// arr = ["Ich","bin","Reza"];
// output(arr);
// output(arr[0]);
// output("------------");

// nested arrays - Prinzip: [[[]]]
// nested arrays  - hier: [[],[]]
// arr =   [
//             ["Ich","bin","Reza"],
//             ["Ich","bin","Moritz"]
//         ];
      
// output(arr);
// output(arr[0]);
// output(arr[0][0]+ " " + arr[1][2]);
// output(arr[1][0]);
// output("------------");

// // // nested loop
// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//         output("Index i: " + i + " Index j: " + j);
//         output(arr[i][j]);       
//     }
// }



/*Objekte 1 Daten/ Funktionen */

// let person ={
//     firstName: "Reza",
//     secondName: "Kouh Payeh",
//     salary: [250000, 200000],

//     sayHello: function(){
//         return "Hello everyone";

//     },

//     sayHello2 : function () {
//         return "Hello, my name is " + this.firstName;
        
//     }


// };

// output (person);

// output(person.firstName);
// output(person.secondName);
// output(person.salary[0]);
// output(person.sayHello());
// output(person.sayHello2());


// const txt = person.sayHello() + ", ich bin " + person.firstName +
//             " und verdiene " + person.salary[0] + " p.a."

// output(txt)

//------------------------------

/***** Objekte 2 - Hierarchie *******/
// Tiefer, tiefer - Irgendwo in der Tiefe gibt es ein Licht // K.Bush
// Der Baikalsee ist mit 1642 m der tiefste See der Erde. ...
// deep - deeper - deepest
// nested object {{{}}}


let baikal = {
    value: "10m",
    deep: {
        deeper:{
            deepest:"Das Licht - auf 1642m!",
            temperature: "4 Grad Celsius"
        }
    }
}

output(baikal);
output(baikal.value);






// Modul: Ausgabe | Test
//output("hi");
function output(outputData) {
    console.log(outputData);
}