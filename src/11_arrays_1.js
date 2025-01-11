/* Die Satzbau-Maschine | Arrays */

/**
 *   THEORIE
 * 
 */

/*** 02. Theorie: Array */

// function output(data) {
//     console.log(data);
    
// }
// let arr;
// // arr = new Array();
// arr = []; // Literal
// arr = [1,2,3,4,5];

// output(arr);
// output(arr.length);
// output(arr[0]);
// output(arr[arr.length-1]);




/**
 *   PRAXIS
 * 
 */


/*** 01. Funktionalität mit Einzelparametern */
// --> "Ich bin ........."
// output(getSentence("Ich","bin","die","coole","Reza","Kouh Payeh"));

// function getSentence(word1,word2,word3,word4,word5,word6) {
//     const GAP = " ";
//     const PUNCT = ".";
//     let str =   word1 + GAP +
//                 word2 + GAP +
//                 word3 + GAP +
//                 word4 + GAP + 
//                 word5 + GAP +
//                 word6 
//                 PUNCT;

//     return str;
// }


// // Modul: Ausgabe in Konsole : Test
// // output("hi"); 
function output(outputStr) {
    console.log(outputStr);
}

// console.log("-----------------");


// function getSentence(words) {
//     const GAP = " ";
//     const PUNCT = ".";
//     let str = words.join(GAP);
//     return str + PUNCT;

// }
// let wordsArray = ["Ich","bin","die","coole","Reza","Kouh Payeh 😊"] ;
// output(getSentence(wordsArray));

// function output(data) {
//     console.log(data);
    
// }

//------------------------
/* 02a. Theorie: Schleifen (for-schleife) */
/* For -Schleifen als allg. Wiederholungs-Struktur */

// for (let i = 0; i < 5; i++){
//     output("Index :" + i)
// }


// Dekrement (obere Grenze --> untere Grenze)
// for (let i = 10; i > 0; i--) 
//     {
//         output("index: " + i);
//     }
    
// Inkrement (var. Schrittweite)
// for (let i = 10; i <= 100; i += 5) 
//     {
//         output("index: " + i);   
//     }
//--------------------------


let arr = ["Ich","bin","die","coole","Reza","Kouh Payeh😊"];
let result ="";
const PUNKT = ".";
for (let i = 0; i < arr.length; i++) 
{
    result += arr[i]+ " ";
    
        
     
 }
 result =( result.trim() + PUNKT);

   
//     output(i); 
//    output(arr[i]);
 output(result);
