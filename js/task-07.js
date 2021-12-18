const inputController = document.querySelector('#font-size-control');
const text = document.querySelector('#text');


const onInputChange = (event) => {
    let value = Number(inputController.value);
    
    text.style.fontSize = `${value}px`;
}

inputController.addEventListener('input', onInputChange);