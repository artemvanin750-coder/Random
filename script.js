const phrases = [
    "Сегодня отличный день для кода.",
    "Случайность — это непознанная закономерность.",
    "Ваша чашка чая уже остыла.",
    "Пора обновить вкладку.",
    "Где-то сейчас идёт дождь.",
    "Кот где-то спит на клавиатуре."
];

function getRandomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

window.onload = function() {
    const phraseElement = document.getElementById('phrase');
    const randomPhrase = getRandomItem(phrases);
    const randomColor = getRandomColor();

    document.body.style.backgroundColor = randomColor;
    phraseElement.textContent = randomPhrase;
};
