const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', submitClick);

function submitClick(event) {
    event.preventDefault();
    const {
        elements: { email, password }
    } = event.currentTarget;

if (email.value === '' || password.value === '') {
    return alert(`Please fill in all the fields!`)
}

    const userDet = { email: email.value, Password: password.value }
    console.log(userDet);
    event.currentTarget.reset();
}
