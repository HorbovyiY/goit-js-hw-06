function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const create = document.querySelector('[data-create]');
const destroy = document.querySelector('[data-destroy]');
const number = document.querySelector('input');
let divMarkup=[];

create.addEventListener("click", createBoxes);
destroy.addEventListener("click", destroyBoxes);


function createBoxes(event) { 
    for (let i = 0; i < number.value; i += 1) {
    let div = document.createElement('div');
    div.style.width = `${30 + i * 10}px`;
    div.style.height = `${30 + i * 10}px`;
    div.style.backgroundColor = getRandomHexColor();
  divMarkup.push(div);
  }
  document.querySelector('#boxes').append(...divMarkup);
  divMarkup = [];
}


function destroyBoxes(event) { 
  document.querySelector('#boxes').innerHTML = '';
}



