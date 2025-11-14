const dictionary = {
    easy: [
        {wrong: "aplpe", correct: "apple"},
        {wrong: "bananna", correct: "banana"},
        {wrong: "giraf", correct: "giraffe"},
    ],
    medium: [
        {wrong: "strawbery", correct: "strawberry"},
        {wrong: "elefant", correct: "elephant"},
        {wrong: "tommato", correct: "tomato"},
    ],
    hard: [
        {wrong: "hipopottamus", correct: "hippopotamus"},
        {wrong: "dinosoaur", correct: "dinosaur"},
        {wrong: "camoflage", correct: "camouflage"},
    ],
}

function chooseDifficulty() {
    const level = prompt(
        "Вибери рівень складності:\n1 - Легкий\n2 - Середній\n3 - Складний"
    );

    if (level === "1") return "easy";
    if (level === "2") return "medium";
    if (level === "3") return "hard";

    alert("❌ Невірний вибір. Оберемо легкий рівень.")
    return "easy";
}

function getHints(word) {
    return `
    ПІДКАЗКИ:
    - Довжина: ${word.length} букв
    - Починається на: ${word.charAt(0)}
    - Закінчується на : ${word.charAt(word.length - 1)}
    - Перші 2 букви: ${word.slice(0, 2)}
    `;
}

function playRound(wordObj) {
    const hints = getHints(wordObj.correct);

    const raw = prompt(
        `Виправ слово: ${wordObj.wrong}\n\n${hints}\nВВеди правильне слово:`
    );

    if (raw === null) {
        alert("Гра відмінена користувачем.")
        return false;
    }

    const answer = raw.trim();

    if (answer === "") {
        alert("⚠️ Ти нічого не ввів!")
        return false;
    }

    if (answer.toLowerCase() === wordObj.correct.toLowerCase()) {
        alert("🎉 Молодець правильно!!!");
        return true;
    }

    alert(`❌ Помилка. Правильний варіант: ${wordObj.correct}`);
    return false;
}

function startGame() {
    const difficulty = chooseDifficulty();
    const wordsArray = dictionary[difficulty];

    let score = 0;
    const rounds = 10;

    for (let i = 0; i < rounds; i++) {
        const randomWord = wordsArray[Math.floor(Math.random() * wordsArray.length)];

        if (playRound(randomWord)) score++;
    }
    alert(`🎮Гру завершено!\nТвій результат: ${score} з ${rounds}`);
}

startGame();