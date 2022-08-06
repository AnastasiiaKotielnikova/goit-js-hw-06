function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// const inputEl = document.querySelector('input');
// const createBtnEl = document.querySelector('#data-create');
// const destroyBtnEl = document.querySelector('#data-destroy');
// const boxesEl = document.querySelector('#boxes');

// createBtnEl.addEventListener('click', createBoxes);

// function createBoxes(amount) {
//   const createEl = document.createElement('div');
//   createEl = amount;
//   boxesEl.append(createEl);
//   const newColor = getRandomHexColor();
// }

// destroyBtnEl.addEventListener('click', destroyBoxes);

// function destroyBoxes() {
//   boxesEl.reset();
// }
