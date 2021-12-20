const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');


const onInputTyping = (event) => {

    nameOutput.textContent = event.currentTarget.value;
    
    if (nameOutput.textContent === '') {
        nameOutput.textContent = 'Anonymous'
    } 
}

nameInput.addEventListener('input', onInputTyping)