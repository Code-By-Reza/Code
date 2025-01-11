/*** Mini-Challenge  */
// Satzbau + variable Punktuation

// Vereinbarung:
// "S" (sentence) --> "."  Ich bin Reza.
// "Q" (question) --> "?"  Bist du Reza?
// "E" (exclamation) --> "!"  Ich bin!

// Parameter --> funktion getSentence([ ...], "Q"){ ...}


/*** Funktion mit Array als Parameter */
// mögliche Tests:

// output(getSentence(["Ich","bin","Reza"],"S"));
// output(getSentence(["Bist","du","Reza"],"Q"));
// output(getSentence(["Ich","bin"],"E"));
// output(getSentence(["Ich","hätt","gern","die","Platt","von","dene","zwei","diwodaso","Spass","mache,","habbe","Sie","die"],"Q"));


// Start

function output(text) {
    console.log(text);
}

function getSentence(words, type) {
    if (!Array.isArray(words) || !["S", "Q", "E"].includes(type)) {
        return "Ungültige Eingabe!";
    }

    let sentence = words.join(" ");

    switch (type) {
        case "S":
            sentence += ".";
            break;
        case "Q":
            sentence += "?";
            break;
        case "E":
            sentence += "!";
            break;
        default:
            return "Ungültige Eingabe!";
    }

    return sentence;
}

output(getSentence(["Ich", "bin", "Reza"], "S"));
output(getSentence(["Bist", "du", "Reza"], "Q"));
output(getSentence(["Ich", "bin"], "E"));
output(getSentence(["Ich", "hätt", "gern", "die", "Platt", "von",
    "dene", "zwei", "diwodaso", "Spass", "mache,", "habbe", "Sie", "die"], "Q"));

// Ende 