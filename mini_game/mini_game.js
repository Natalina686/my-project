const words = [
    { wrong: "aplpe", correct: "apple"},
    { wrong: "bananna", correct: "banana"},
    { wrong: "strawbery", correct: "strawberry"},
    { wrong: "elefant", correct: "elephant"},
    { wrong: "giraf", correct: "giraffe"},
]

const randomWord = words[Math.floor(Math.random() * words.length)];

const userAnswer = prompt(`Виправ слово: ${randomWord.wrong}`);

if (userAnswer && userAnswer.toLowerCase() === randomWord.correct.toLowerCase()) {
    alert("Молодець! Правильно!");
} else {
    alert(`Спробуй ще! Правильне слово: ${randomWord.correct}`);
}

for (let i = 0; i < 5; i++) {
  const randomWord = words[Math.floor(Math.random() * words.length)];
  console.log(randomWord.wrong);
}
