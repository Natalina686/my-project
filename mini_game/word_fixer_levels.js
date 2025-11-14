

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

    const raw = prompt(
    "Вибери рівень складності:\n1 - Легкий\n2 - Середній\n3 - Складний"
  );

  if (raw === null) {
    alert("Вибір скасовано — оберемо легкий рівень.");
    return "easy";
  }

    const level = raw.trim();

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
        `Виправ слово: ${wordObj.wrong}\n\n${hints}\nВведи правильне слово:`
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

function getProgress() {
    const data = localStorage.getItem("wordFixerProgress");
    if (!data) {
        return {
            totalGames: 0,
            bestScore: 0,
            allScores: []
        };
    }

    try {
        return JSON.parse(data);
    } catch (e) {
        console.warn("Некоректні дані у localStorage, скидаємо прогрес.", e);
        return {
            totalGames: 0,
            bestScore: 0,
            allScores: []
        };
    }
}

function saveProgress(progress) {
    localStorage.setItem("wordFixerProgress", JSON.stringify(progress));
}

function getTopScores() {
    const progress = getProgress();
    const sorted = [...progress.allScores].sort((a, b) => b - a);
    return sorted.slice(0, 5);
}


function startGame() {
    const difficulty = chooseDifficulty();
    const wordsArray = [...dictionary[difficulty]];

    let score = 0;
    const rounds = Math.min(10, wordsArray.length);

    for (let i = 0; i < rounds; i++) {
        const idx = Math.floor(Math.random() * wordsArray.length);
    const [randomWord] = wordsArray.splice(idx, 1);

        if (playRound(randomWord)) score++;
    }
    alert(`🎮 Гру завершено!\nТвій результат: ${score} з ${rounds}`);

    const progress = getProgress();

    progress.totalGames++;
    progress.allScores.push(score);

    if (score > progress.bestScore) {
        progress.bestScore = score;
        alert("🏆 Новий рекорд! Вітаю!");
    }

    saveProgress(progress);

    alert(
        `📊 Статистика:\n` +
        `Ігор зіграно: ${progress.totalGames}\n` +
        `Найкращий результат: ${progress.bestScore}\n` +
        `Останні результати: ${progress.allScores.join(", ")}`
    );


const top = getTopScores();
if (top.length === 0) {
    alert("🏅 Поки що немає результатів для ТОП-5.");
  } else {
    alert(`🏅 ТОП-5 результатів:\n${top.join("\n")}`);
  }
}



startGame();