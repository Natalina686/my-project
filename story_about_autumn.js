const button = document.getElementById("read-btn");
const textContent = document.getElementById("text-content").innerText;

button.addEventListener("click", () => {
    const utterance = new SpeechSynthesisUtterance(textContent);
    utterance.lang = 'en-US';
    speechSynthesis.speak(utterance);
});