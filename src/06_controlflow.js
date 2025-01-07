// Entscheidungsstrukturen | control flow

// Deklaration + Assignment
const ageJohn = 30;
const ageMark = 30;

// Deklaration
let isJohnOlder, isJohnEqual;

// Test | Logische Aussage
isJohnOlder = (ageJohn > ageMark);
isJohnEqual = (ageJohn == ageMark);

// Ausgabe
 //console.log("ageJohn: " + ageJohn);
 //console.log("ageMark: " + ageMark);
 //console.log("isJohnOlder: " + isJohnOlder);
 //console.log("isJohnEqual: " + isJohnEqual);
 //console.log("------------------");

 /************ IF  ************/
// TINA --> There is no alternative!
// entweder JA oder nix ... alternativlos
// Türsteher-Politik (Doors 10 p.m.)

// if(true)
//if(false)
//if(isJohnOlder)
//if(ageJohn > ageMark)
//{
   // console.log("John ist älter!");
//}

/************ IF - ELSE  ************/
// mit Alternative  
// entweder ja oder nein



//if(true)
//if(false)
//if(isJohnOlder)
if(ageJohn > ageMark)

{
    //console.log("John is älter!");

}

// alternative IF-Zweig 1...n
//else if(isJohnEqual){
    //console.log("John ist gleich alt!")
//}

//else
//{
    //console.log("John is jünger!");

//}

/************  Ternäre (ternary) Schreibweise ************/
//console.log( (isJohnOlder) ? "John is older" : "Mark is older");


//let tag = 1;
//switch (tag) {
    //case 1:
      //console.log("Montag")
      //break;
    //case 2:
      //console.log("Dinstag")
      //break;
    //default:
      //console.log("Ungültige Tag")
      //break;
      //console.log(1)

  //}
  
/****** Fallunterscheidung / SWITCH|CASE 1 ******/

 const firstName = "Jane";
 let job;

 //job = "driver";  // .. fährt TAXI! / UBER
 job = "diver"; // .. taucht im Rhein! 
 //job = "artist"; // .. malt ein Bild!
 //job = "pilot"; // .. macht etwas anderes! --> default
 //job = "teacher"; // .. unterrichtet!
 //job = "instructor"; // .. unterrichtet!

switch (job) {
    case "driver":
        console.log(firstName  + " fährt Taxi!");
        
        break;

    case "diver":
        console.log(firstName  + " taucht im Rhein!");

        break;

    case "artist":
        console.log(firstName  + " malt ein Bild!");

        break;

    case "pilot":
        console.log(firstName  + " macht etwas anderes!");

        break;

    case "teacher":
        console.log(firstName  + " unterrichtet!");

        break;

    case "instructor":
        console.log(firstName  + " unterrichtet!");
    default:
        break;
}