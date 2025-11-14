const words = [
    { wrong: "aplpe", correct: "apple"},
    { wrong: "bananna", correct: "banana"},
    { wrong: "strawbery", correct: "strawberry"},
    { wrong: "elefant", correct: "elephant"},
    { wrong: "giraf", correct: "giraffe"},
];

function checkWord(wordObj) {
    const answer = prompt(`Виправ слово: ${wordObj.wrong}`);

    if (!answer) {
        alert("⚠️ Введи хоч щось!");
        return false;
    }

    if (answer.toLowerCase() === wordObj.correct.toLowerCase()) {
        alert("✅ Молодець! Правильно!");
        return true;
    } else {
        alert(`❌ Помилка! Правильне слово: ${wordObj.correct}`);
        return false;
    }
}

let score = 0;
const rounds = 5;

for (let i = 0; i < rounds; i ++) {
    const randomWord = words[Math.floor(Math.random() * words.length)];

    const isCorrect = checkWord(randomWord);

    if (isCorrect) {
        score += 1;
    }
}

alert(`Гру закінчено!\nТвій результат: ${score} з ${rounds}`);


