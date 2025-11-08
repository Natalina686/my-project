const readBtn = document.getElementById("read-btn");
const pauseBtn = document.getElementById("pause-btn");
const stopBtn = document.getElementById("stop-btn");
const article = document.getElementById("text-content");

const paragraphs = article.querySelectorAll("p");

paragraphs.forEach(p => {
    const text = p.innerText;
    const words = text.split(/\s+/);
    p.innerHTML = words.map(word => `<span>${word}</span>`).join(" ");
})

const spans = article.querySelectorAll("span");

const originalText = Array.from(spans).map(span => span.innerText).join(" ");

const utterance = new SpeechSynthesisUtterance(originalText);
utterance.lang = "en-US";
utterance.rate = 0.5;
utterance.pitch = 1;
utterance.volume =1;

let currentWordIndex = 0;

utterance.onboundary = (event) => {
    if (event.name === "word") {
        spans.forEach(span => span.classList.remove("highlight"));
        if (spans[currentWordIndex]) {
            spans[currentWordIndex].classList.add("highlight");
            currentWordIndex++;
        }
    }
};

utterance.onend = () => {
    spans.forEach(span => span.classList.remove("highlight"));
    currentWordIndex = 0;
};

readBtn.addEventListener("click", () => {
  speechSynthesis.cancel();
  currentWordIndex = 0;
  speechSynthesis.speak(utterance);
});

pauseBtn.addEventListener("click", () => {
  if (speechSynthesis.paused) {
    speechSynthesis.resume();
  } else {
    speechSynthesis.pause();
  }
});

stopBtn.addEventListener("click", () => {
  speechSynthesis.cancel();
  spans.forEach(span => span.classList.remove("highlight"));
  currentWordIndex = 0;
});
