const name = prompt("What is your name?");
console.log(`Hello, ${name}!`);
console.log(name.toUpperCase());

const wrongWord = "aplpe";
const correctWord = "apple";
if (wrongWord === correctWord) {
    console.log("You have a mistake");
} else {
    console.log("That's right!", correctWord);
}

const word = "aplpe";
console.log(word.replace(/l/g, "p"))


function countLetters(word) {
    return word.length;
}

const letters = countLetters(word);
console.log(`The word "${word}" has a ${letters} letters`);

