let valueEl = Number(document.querySelector('#value').textContent);
let counterValue = document.querySelector('#value');

const descrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]'); 


descrementBtn.addEventListener('click', event => {
    valueEl -= 1;
    counterValue.innerText = valueEl;
});

incrementBtn.addEventListener('click', event => {
    valueEl += 1;
    counterValue.innerText = valueEl;
});



