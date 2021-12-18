function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
console.log(getRandomHexColor());

const changeBtn = document.querySelector('.change-color');
const colorSpan = document.querySelector('.color');
const body = document.querySelector('body');


const onBtnClick = () => {
  const randomColor = getRandomHexColor();
  body.style.backgroundColor = randomColor;
  colorSpan.textContent = randomColor;
}

changeBtn.addEventListener('click', onBtnClick)