const inputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

const oninputClick = inputEl.addEventListener('input', inputFont);

function inputFont(event) {
    textEl.style.fontSize = `${event.currentTarget.value}px`;
}

