function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColor = document.querySelector('.change-color');
const textColor = document.querySelector('.color');
const body = document.querySelector('body');

changeColor.addEventListener("click", onClick);

function onClick(event) { 
  let color = getRandomHexColor();
  body.style.backgroundColor = color;
  textColor.textContent = color;
}

