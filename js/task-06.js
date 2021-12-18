const validationEl = document.querySelector('#validation-input');
const validLength = Number(validationEl.getAttribute('data-length'));

const onBlurInput = (event) => {
    const inputContent = event.currentTarget.value.length;
    
    if (inputContent === validLength) {
        validationEl.classList.add('valid');
        validationEl.classList.remove('invalid');
    } else {
        validationEl.classList.add('invalid')
    }
}

validationEl.addEventListener('blur', onBlurInput);
