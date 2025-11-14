const words = [
    { wrong: "aplpe", correct: "apple"},
    { wrong: "bananna", correct: "banana"},
    { wrong: "strawbery", correct: "strawberry"},
    { wrong: "elefant", correct: "elephant"},
    { wrong: "giraf", correct: "giraffe"},
];

function getHints(word) {
    return `
    ПІДКАЗКИ:
    - Слово має "${word.charAt(0)}""
    - Закінчується на: "${word.charAt(word.length - 1)}"
    - Перші 2 букви: "${word.slice(0, 2)}"`;
}

function playRound(wordObj) {
    const hints = getHints(wordObj.correct);


    const answer = prompt(`Виправ слово: ${wordObj.wrong}\n\n${hints}\nВведи правильне слово:}`);

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

    if (playRound(randomWord)) score++;

}

alert(`Гру закінчено!\nТвій результат: ${score} з ${rounds}`);


