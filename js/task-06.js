const input = document.querySelector('input');
const inputLength = document.querySelector('input[data-length="6"]');
const style = document.querySelector('style');

inputLength.addEventListener('blur', onInputClick);

function onInputClick(event) {
    console.log(event.currentTarget.value.length);
    if (event.currentTarget.value.length === Number(inputLength.dataset.length)) {
        input.classList.add('valid');
        input.classList.remove('invalid');
    } else {
        input.classList.add('invalid');
    }
}
