let counterValue = 0;

const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const valueCount = document.querySelector('#value');

const onClickDecrementBtn = () => {
    counterValue -= 1;
    valueCount.textContent = counterValue;
};
const onClickIncrementBtn = () => {
    counterValue += 1;
    valueCount.textContent = counterValue;
};

decrementBtn.addEventListener('click', onClickDecrementBtn);
incrementBtn.addEventListener('click', onClickIncrementBtn);

